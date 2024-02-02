import routes from "../config";
import { api } from "../config/axiosConfig";

const getHeaderOptions = (token) => ({
  headers: {
    "Content-Type": "application/json",
    "Authorization": token
  }
});

const getWallets = async (accountId, token) => {
  return await api.get(routes.WALLETS.BY_ACCOUNT(accountId), getHeaderOptions(token))
}

const addNewWallet = async (data, token) => {
  return await api.post(`${routes.API_ROUTES.WALLETS}/`, data, getHeaderOptions(token))
}

const updateWallet = async (walletId, data, token) => {
  return await api.put(routes.WALLETS.UPDATE_BY_WALLET_ID(walletId), data, getHeaderOptions(token))
}


export { addNewWallet, getWallets, updateWallet };
