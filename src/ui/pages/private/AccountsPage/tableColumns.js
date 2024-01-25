import { formatCurrency, sortNames } from "../../../../utilities/generalUtils";

export const tableColums = [
  {
    title: "Nombre",
    dataIndex: "accountName",
    sorter: (a, b) => sortNames(a, b),
    render: (accountName, record) => {
      const style = {
        color: record.color,
        fontWeight: '600'
      }

      return <span style={style}>{accountName}</span>
    }
  },
  {
    title: "Balance",
    dataIndex: "accountBalance",
    sorter: (a, b) => a.accountBalance - b.accountBalance,
    render: (balance) => {
      return <span>{formatCurrency(balance, 2)}</span>
    }
  },
  {
    title: "Moneda",
    dataIndex: "accountCurrency",
    sorter: (a, b) => a.accountCurrency - b.accountCurrency,
    render: (currency) => {
      return <span>{currency.toUpperCase()}</span>
    }
  },
]