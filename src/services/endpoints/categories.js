import axios from "axios";
import routes from "../config";

const getHeaderOptions = (token) => ({
  headers: {
    "Content-Type": "application/json",
    "Authorization": token
  }
});

const addNewCategory = async (data, token) => {
  return await axios.post(`${routes.API_ROUTES.CATEGORIES}/`, data, getHeaderOptions(token))
}

const getCategories = async (userId, token) => {
  return await axios.get(routes.CATEGORIES.BY_USER(userId), getHeaderOptions(token))
}

const getCategory = async (categoryId, userId, token) => {
  return await axios.get(routes.CATEGORIES.BY_CATEGORY_AND_USER(categoryId, userId), getHeaderOptions(token))
}

const updateCategory = async (data, categoryId, token) => {
  return await axios.put(routes.CATEGORIES.UPDATE(categoryId), data, getHeaderOptions(token))
}

const deleteCategory = async (data, token) => {
  return await axios.delete(`${routes.API_ROUTES.CATEGORIES}/`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    data: data
  })
}


const getSummary = async (accountId, type, startDate, endDate, token) => {
  return await axios.get(routes.CATEGORIES.SUMMARY(accountId, type, startDate, endDate), getHeaderOptions(token));
}

const getMonthlySummary = async (accountId, type, year, month, token) => {
  return await axios.get(routes.CATEGORIES.MONTHLY_SUMMARY(accountId, type, year, month), getHeaderOptions(token));
}

const getAnnualSummary = async (accountId, type, year, token) => {
  return await axios.get(routes.CATEGORIES.ANNUAL_SUMMARY(accountId, type, year), getHeaderOptions(token));
}

export { addNewCategory, getCategories, getCategory, updateCategory, deleteCategory, getSummary, getMonthlySummary, getAnnualSummary }