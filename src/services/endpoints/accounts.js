import axios from "axios";
import routes from "../config";

const getHeaderOptions = (token) => ({
  headers: {
    "Content-Type": "application/json",
    "Authorization": token
  }
});

const getAccounts = async (userId, token) => {
  return await axios.get(routes.ACCOUNTS.BY_USER(userId), getHeaderOptions(token))
}

const getAccountBalance = async (accountId, token) => {
  return await axios.get(routes.ACCOUNTS.BALANCE(accountId), getHeaderOptions(token))
}

const addNewAccount = async (data, token) => {
  return await axios.post(`${routes.API_ROUTES.ACCOUNTS}/`, data, getHeaderOptions(token))
}

const updateFavoriteAccount = async (data, token) => {
  return await axios.put(routes.ACCOUNTS.UPDATE_FAVORITE(), data, getHeaderOptions(token))
}

const deleteAccount = async (data, token) => {
  return await axios.delete(`${routes.API_ROUTES.ACCOUNTS}/`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    data: data
  })
}

const updateAccount = async (accountId, data, token) => {
  return axios.put(`${routes.ACCOUNTS.UPDATE(accountId)}`, data, getHeaderOptions(token))
}

export { getAccounts, getAccountBalance, addNewAccount, updateFavoriteAccount, deleteAccount, updateAccount };