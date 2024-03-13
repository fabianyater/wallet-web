const API_ROUTES = {
  AUTH: `/auth`,
  USERS: `/users`,
  ACCOUNTS: `/accounts`,
  CATEGORIES: `/categories`,
  TRANSACTIONS: `/transactions`,
  WALLETS: `/wallets`

};

const USER = {
  AUTHENTICATE: () => `${API_ROUTES.AUTH}/login`,
  SIGNUP: () => `${API_ROUTES.USERS}/signup`,
  REFRESH_TOKEN: (refreshToken) => `${API_ROUTES.AUTH}/refresh-token?refreshToken=${refreshToken}`,
}

const ACCOUNTS = {
  BY_USER: (userId) => `${API_ROUTES.ACCOUNTS}/user/${userId}`,
  BY_ACCOUNT_AND_USER: (accountId, userId) => `${API_ROUTES.ACCOUNTS}/${accountId}/user/${userId}`,
  BALANCE: (accountId) => `${API_ROUTES.ACCOUNTS}/${accountId}/balance`,
  UPDATE: (accountId) => `${API_ROUTES.ACCOUNTS}/${accountId}`,
  UPDATE_FAVORITE: () => `${API_ROUTES.ACCOUNTS}/favorite`
}

const CATEGORIES = {
  BY_USER: (userId) => `${API_ROUTES.CATEGORIES}/user/${userId}`,
  BY_CATEGORY_AND_USER: (categoryId, userId) => `${API_ROUTES.CATEGORIES}/${categoryId}/user/${userId}`,
  UPDATE: (categoryId) => `${API_ROUTES.CATEGORIES}/${categoryId}`,
  SUMMARY: (accountId, type, startDate, endDate) => `${API_ROUTES.CATEGORIES}/summary/account/${accountId}?startDate=${startDate}&endDate=${endDate}&type=${type}`,
  MONTHLY_SUMMARY: (accountId, type, year, month) => `${API_ROUTES.CATEGORIES}/monthly/summary/account/${accountId}?type=${type}&year=${year}&month=${month}`,
  ANNUAL_SUMMARY: (accountId, type, year) => `${API_ROUTES.CATEGORIES}/annual/summary/account/${accountId}?type=${type}&year=${year}`,
}

const TRANSACTIONS = {
  BY_USER: (userId, accountId, page, size) => `${API_ROUTES.TRANSACTIONS}/user/${userId}?accountId=${accountId}&page=${page}&size=${size}`,
  BY_TXN_AND_WALLET: (txnId, walletId) => `${API_ROUTES.TRANSACTIONS}/${txnId}/account/${walletId}`,
  MONTHLY_SUMMARY: (accountId, year, month) => `${API_ROUTES.TRANSACTIONS}/monthly/summary/account/${accountId}?year=${year}&month=${month}`,
  ANNUAL_SUMMARY: (accountId, year) => `${API_ROUTES.TRANSACTIONS}/annual/summary/account/${accountId}?year=${year}`,
  STATS: (accountId, startDate, endDate) => `${API_ROUTES.TRANSACTIONS}/stats/account/${accountId}?startDate=${startDate}&endDate=${endDate}`,
  TOTAL_AMOUNT: (accountId, year, month) => `${API_ROUTES.TRANSACTIONS}/total/account/${accountId}?year=${year}&month=${month}`
}

const WALLETS = {
  BY_ACCOUNT: (accountId, page, items) => `${API_ROUTES.WALLETS}/account/${accountId}?page=${page}&items=${items}`,
  UPDATE_BY_WALLET_ID: (walletId) => `${API_ROUTES.WALLETS}/update/${walletId}`,
  BY_WALLET_ID: (walletId) => `${API_ROUTES.WALLETS}/${walletId}`
}

const exportedObject = { USER, CATEGORIES, ACCOUNTS, TRANSACTIONS, API_ROUTES, WALLETS }

export default exportedObject;
