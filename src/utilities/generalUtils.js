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

export const statementDays = [
  {
    id: 1,
    value: "1",
    name: "1",
  },
  {
    id: 2,
    value: "2",
    name: "2",
  },
  {
    id: 3,
    value: "3",
    name: "3",
  },
  {
    id: 4,
    value: "4",
    name: "4",
  },
  {
    id: 5,
    value: "5",
    name: "5",
  },
  {
    id: 6,
    value: "6",
    name: "6",
  },
  {
    id: 7,
    value: "7",
    name: "7",
  }
  ,
  {
    id: 8,
    value: "8",
    name: "8",
  },
  {
    id: 9,
    value: "9",
    name: "9",
  },
  {
    id: 10,
    value: "10",
    name: "10",
  },
  {
    id: 11,
    value: "11",
    name: "11",
  },
  {
    id: 12,
    value: "12",
    name: "12",
  },
  {
    id: 13,
    value: "13",
    name: "13",
  },
  {
    id: 14,
    value: "14",
    name: "14",
  },
  {
    id: 15,
    value: "15",
    name: "15",
  }
  ,
  {
    id: 16,
    value: "16",
    name: "16",
  },
  {
    id: 17,
    value: "17",
    name: "17",
  },
  {
    id: 18,
    value: "18",
    name: "18",
  },
  {
    id: 19,
    value: "19",
    name: "19",
  },
  {
    id: 20,
    value: "20",
    name: "20",
  },
  {
    id: 21,
    value: "21",
    name: "21",
  },
  {
    id: 22,
    value: "22",
    name: "22",
  },
  {
    id: 23,
    value: "23",
    name: "23",
  }
  ,
  {
    id: 24,
    value: "24",
    name: "24",
  },
  {
    id: 25,
    value: "25",
    name: "25",
  },
  {
    id: 26,
    value: "26",
    name: "26",
  },
  {
    id: 27,
    value: "27",
    name: "27",
  },
  {
    id: 28,
    value: "28",
    name: "28",
  },
  {
    id: 29,
    value: "29",
    name: "29",
  },
  {
    id: 30,
    value: "30",
    name: "30",
  },
  {
    id: 31,
    value: "31",
    name: "31",
  }
];


export const duePaymentDays = [
  {
    id: 1,
    value: "1",
    name: "1",
  },
  {
    id: 2,
    value: "2",
    name: "2",
  },
  {
    id: 3,
    value: "3",
    name: "3",
  },
  {
    id: 4,
    value: "4",
    name: "4",
  },
  {
    id: 5,
    value: "5",
    name: "5",
  },
  {
    id: 6,
    value: "6",
    name: "6",
  },
  {
    id: 7,
    value: "7",
    name: "7",
  }
  ,
  {
    id: 8,
    value: "8",
    name: "8",
  },
  {
    id: 9,
    value: "9",
    name: "9",
  },
  {
    id: 10,
    value: "10",
    name: "10",
  },
  {
    id: 11,
    value: "11",
    name: "11",
  },
  {
    id: 12,
    value: "12",
    name: "12",
  },
  {
    id: 13,
    value: "13",
    name: "13",
  },
  {
    id: 14,
    value: "14",
    name: "14",
  },
  {
    id: 15,
    value: "15",
    name: "15",
  }
  ,
  {
    id: 16,
    value: "16",
    name: "16",
  },
  {
    id: 17,
    value: "17",
    name: "17",
  },
  {
    id: 18,
    value: "18",
    name: "18",
  },
  {
    id: 19,
    value: "19",
    name: "19",
  },
  {
    id: 20,
    value: "20",
    name: "20",
  },
  {
    id: 21,
    value: "21",
    name: "21",
  },
  {
    id: 22,
    value: "22",
    name: "22",
  },
  {
    id: 23,
    value: "23",
    name: "23",
  }
  ,
  {
    id: 24,
    value: "24",
    name: "24",
  },
  {
    id: 25,
    value: "25",
    name: "25",
  },
  {
    id: 26,
    value: "26",
    name: "26",
  },
  {
    id: 27,
    value: "27",
    name: "27",
  },
  {
    id: 28,
    value: "28",
    name: "28",
  },
  {
    id: 29,
    value: "29",
    name: "29",
  },
  {
    id: 30,
    value: "30",
    name: "30",
  },
  {
    id: 31,
    value: "31",
    name: "31",
  }
];




export const fields = [
  "name",
  "balance",
  "type",
  "currency",
  "color",
  "isExcluded",
  "creditLimit",
  "duePaymentDay",
  "statementDay"
];