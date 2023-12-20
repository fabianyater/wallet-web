import { formatCurrency } from "../../../../../utilities/generalUtils";

export const columns = [
  {
    title: "Nombre",
    width: 200,
    dataIndex: "name",
    sorter: (a, b) => {
      const nameA = a.name ? a.name : "";
      const nameB = b.name ? b.name : "";
      return nameA.localeCompare(nameB);
    },
  },
  {
    title: "Tipo",
    width: 150,
    dataIndex: "type",
    sorter: (a, b) => {
      const nameA = a.type ? a.type : "";
      const nameB = b.type ? b.type : "";
      return nameA.localeCompare(nameB);
    },
    render: (type, record) => {
      const style = {
        color: record.type === "expense" ? "#17EB53" : "#FF3B3B",
      };

      return <span style={style}>{type}</span>;
    },
  },
  {
    title: "Balance",
    width: 150,
    dataIndex: "balance",
    sorter: (a, b) => a.balance - b.balance,
    render: (balance) => {
      return <span>{formatCurrency(balance, 2)}</span>
    }
  },
  {
    title: "Moneda",
    width: 150,
    dataIndex: "currency",
    sorter: (a, b) => a.currency - b.currency,
  },
  {
    title: "Accciones",
    dataIndex: "actions",
    width: 20
  },
  {
    dataIndex: "type",
    onFilter: (value, record) => record.type.indexOf(value) === 0,
    filters: [
      { text: 'General', value: 'general' },
      { text: 'Tarjeta de crédito', value: 'creditCard' },
    ],
    width: 0,
    render: () => null,
  },
];