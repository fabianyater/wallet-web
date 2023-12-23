import routes from "../config";
import {api} from "../config/axiosConfig";
import axios from "axios";

const headerOptions = {
  headers: {
    "Content-Type": "application/json"
  }
}

const authenticate = async (data) => {
  return await api.post(routes.USER.AUTHENTICATE(), data, {
    headers: headerOptions
  })
}

const signup = async (data) => {
  return await api.post(routes.USER.SIGNUP(), data, {
    headers: headerOptions
  })
}


export {authenticate, signup}