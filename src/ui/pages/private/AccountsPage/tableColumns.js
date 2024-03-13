import { formatCurrency, sortNames } from "../../../../utilities/generalUtils";
import SortArrows from "../../../components/SortArrows/SortArrows";

export const tableColums = [
  {
    title: "Nombre",
    dataIndex: "accountName",
    sorter: (a, b) => sortNames(a, b),
    sortIcon: ({ sortOrder }) => <SortArrows sortOrder={sortOrder} />,
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
    sortIcon: ({ sortOrder }) => <SortArrows sortOrder={sortOrder} />,
    render: (balance) => {
      return <span>{formatCurrency(balance, 2)}</span>
    }
  },
  {
    title: "Moneda",
    dataIndex: "accountCurrency",
    sorter: (a, b) => a.accountCurrency - b.accountCurrency,
    sortIcon: ({ sortOrder }) => <SortArrows sortOrder={sortOrder} />,
    render: (currency) => {
      return <span>{currency.toUpperCase()}</span>
    }
  },
]