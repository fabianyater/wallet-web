import axios from "axios";
import {getApiUrl} from "../../utilities/getApiUrl";
import {
  getAuthFromToken,
  getRefreshTokenFromLocalStorage,
  getTokenFromLocalStorage
} from "../../utilities/generalUtils";
import routes from "./config";

const baseUrl = getApiUrl();
export const api = axios.create({baseURL: baseUrl});
const refreshToken = (refreshToken) => {
  return axios.post(`${baseUrl}${routes.USER.REFRESH_TOKEN(refreshToken)}`, null, {
    headers: {
      Authorization: refreshToken
    }
  })
}

api.interceptors.request.use(async config => {
  config.headers.Authorization = await getTokenFromLocalStorage();
  return config;
});

api.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest.__isRetryRequest) {
      originalRequest.__isRetryRequest = true;
      const refreshTokenFromLocalStorage = await getRefreshTokenFromLocalStorage();
      refreshToken(refreshTokenFromLocalStorage).then(({data}) => {
        const auth = getAuthFromToken();

        if (auth) {
          auth.token = data.jwt
          auth.refreshToken = data.refreshToken
          auth.expirationDate = data.expirationDate
        }

        localStorage.setItem("auth", JSON.stringify(auth));

        api.defaults.headers.Authorization = data.jwt;
        originalRequest.headers.Authorization = data.jwt;

        return api(originalRequest);
      })
    }
    // Si el token de refresco también está expirado, redirige al inicio de sesión
    return Promise.reject(error);
  }
);