export const formatCurrency = (amount, decimals) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: decimals,
  }).format(amount);
};

export const getAuthFromToken = () => {
  return JSON.parse(localStorage.getItem("auth")) || "";
}

export const getAccountIdFromLocalStorage = () => {
  const storedAuth = getAuthFromToken();
  return storedAuth.accountId;
}

export const getTokenFromLocalStorage = () => {
  const storedAuth = getAuthFromToken();
  return storedAuth.token;
}

export const getRefreshTokenFromLocalStorage = () => {
  const storedAuth = getAuthFromToken();
  return storedAuth.refreshToken;
}