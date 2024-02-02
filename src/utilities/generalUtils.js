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

export const sortNames = (a, b) => {
  const nameA = a.name ? a.name : "";
  const nameB = b.name ? b.name : "";
  return nameA.localeCompare(nameB);
}


export const walletTypesList = [
  {
    id: 1,
    value: "general",
    name: "General",
  },
  {
    id: 2,
    value: "creditCard",
    name: "Tarjeta de crédito",
  },
];

export const currenciesList = [
  {
    id: 1,
    value: "cop",
    name: "COP",
  },
  {
    id: 2,
    value: "eur",
    name: "EUR",
  },
];