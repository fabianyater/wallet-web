import routes from "../config";
import {api} from "../config/axiosConfig";

const getHeaderOptions = (token) => ({
  headers: {
    "Content-Type": "application/json",
    "Authorization": token
  }
});

const getAccounts = async (userId, token) => {
  return await api.get(routes.ACCOUNTS.BY_USER(userId), getHeaderOptions(token))
}

const getAccountBalance = async (accountId, token) => {
  return await api.get(routes.ACCOUNTS.BALANCE(accountId), getHeaderOptions(token))
}

const addNewAccount = async (data, token) => {
  return await api.post(`${routes.API_ROUTES.ACCOUNTS}/`, data, getHeaderOptions(token))
}

const updateFavoriteAccount = async (data, token) => {
  return await api.put(routes.ACCOUNTS.UPDATE_FAVORITE(), data, getHeaderOptions(token))
}

const deleteAccount = async (data, token) => {
  return await api.delete(`${routes.API_ROUTES.ACCOUNTS}/`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    data: data
  })
}

const updateAccount = async (accountId, data, token) => {
  return api.put(`${routes.ACCOUNTS.UPDATE(accountId)}`, data, getHeaderOptions(token))
}

export {getAccounts, getAccountBalance, addNewAccount, updateFavoriteAccount, deleteAccount, updateAccount};