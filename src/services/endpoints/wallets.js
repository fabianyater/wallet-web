import axios from "axios";
import routes from "../config";

const getHeaderOptions = (token) => ({
  headers: {
    "Content-Type": "application/json",
    "Authorization": token
  }
});

const getWallets = async (accountId, token) => {
  return await axios.get(routes.WALLETS.BY_ACCOUNT(accountId), getHeaderOptions(token))
}

const addNewWallet = async (data, token) => {
  return await axios.post(`${routes.API_ROUTES.WALLETS}/`, data, getHeaderOptions(token))
}


export { addNewWallet, getWallets };