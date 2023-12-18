import axios from "axios";
import routes from "../config";

const headerOptions = {
  headers: {
    "Content-Type": "application/json"
  }
}

const authenticate = async (data) => {
  return await axios.post(routes.USER.AUTHENTICATE(), data, {
    headers: headerOptions
  })
}

const signup = async (data) => {
  return await axios.post(routes.USER.SIGNUP(), data, {
    headers: headerOptions
  })
}

export { authenticate, signup }