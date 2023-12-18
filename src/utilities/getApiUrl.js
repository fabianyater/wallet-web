export const getApiUrl = () => {
  if (process.env.REACT_APP_ENV === 'dev') {
    return process.env.REACT_APP_BACKEND_URL_DEV;
  } else {
    return process.env.REACT_APP_BACKEND_URL_PROD;
  }
}