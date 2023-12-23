import routes from "../config";
import {api} from "../config/axiosConfig";

const getHeaderOptions = (token) => ({
  headers: {
    "Content-Type": "application/json",
    "Authorization": token
  }
});

const addNewTransaction = async (data, token) => {
  return await api.post(`${routes.API_ROUTES.TRANSACTIONS}/`, data, getHeaderOptions(token))
}

const getTransactions = async (userId, accountId, page, size, token) => {
  return await api.get(routes.TRANSACTIONS.BY_USER(userId, accountId, page, size), getHeaderOptions(token))
}

const getTransaction = async (txnId, accountId, token) => {
  return await api.get(routes.TRANSACTIONS.BY_TXN_AND_ACCOUNT(txnId, accountId), getHeaderOptions(token))
}

const getStats = async (accountId, startDate, endDate, token) => {
  return await api.get(routes.TRANSACTIONS.STATS(accountId, startDate, endDate), getHeaderOptions(token));
}

const getMonthlySummary = async (accountId, year, month, token) => {
  return await api.get(routes.TRANSACTIONS.MONTHLY_SUMMARY(accountId, year, month), getHeaderOptions(token));
}

const getAnnualSummary = async (accountId, year, token) => {
  return await api.get(routes.TRANSACTIONS.ANNUAL_SUMMARY(accountId, year), getHeaderOptions(token));
}

const getTotalAmounts = async (accountId, year, month, token) => {
  return await api.get(routes.TRANSACTIONS.TOTAL_AMOUNT(accountId, year, month), getHeaderOptions(token));
}


export {
  addNewTransaction,
  getTransactions,
  getTransaction,
  getStats,
  getTotalAmounts,
  getMonthlySummary,
  getAnnualSummary
}