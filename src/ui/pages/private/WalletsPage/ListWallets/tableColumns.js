import { formatCurrency, sortNames } from "../../../../../utilities/generalUtils";

export const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    sorter: (a, b) => sortNames(a, b),
    render: (name, record) => {
      const style = {
        color: record.color,
        fontWeight: '600'
      }

      return <span style={style}>{name}</span>
    }
  },
  {
    title: "Tipo",
    dataIndex: "type",
    sorter: (a, b) => {
      const nameA = a.type ? a.type : "";
      const nameB = b.type ? b.type : "";
      return nameA.localeCompare(nameB);
    },
    render: (type, record) => {
      const style = {
        color: record.type === "general" ? '#5fff98' : 'yellow',
        padding: '2px 10px',
        border: `1px solid ${record.type === "general" ? '#489966' : 'yellow'}`,
        fontSize: '.75rem',
        lineHeight: '1rem',
        borderRadius: '5px',
        fontWeight: '500',
        background: '#3d433f'
      }

      return <span style={style}>{type}</span>
    }
  },
  {
    title: "Balance",
    dataIndex: "balance",
    sorter: (a, b) => a.balance - b.balance,
    render: (balance) => {
      return <span>{formatCurrency(balance, 2)}</span>
    }
  },
  {
    title: "Moneda",
    dataIndex: "currency",
    sorter: (a, b) => a.currency - b.currency,
    render: (currency) => {
      return <span>{currency.toUpperCase()}</span>
    }
  },
  {
    title: "Limitada",
    dataIndex: "isLimited",
    sorter: (a, b) => a.currency - b.currency,
    render: (value, record, index) => {
      return (
        <span style={{ margin: 0 }}>
          {value ? "Sí" : "No"}
        </span>
      );
    },
  },
  {
    title: "Excluída",
    dataIndex: "isExcluded",
    sorter: (a, b) => a.currency - b.currency,
    render: (value, record, index) => {
      return (
        <span style={{ margin: 0 }}>
          {value ? "Sí" : "No"}
        </span>
      );
    },
  },

  /* {
    title: "Accciones",
    dataIndex: "actions",
  
    render: (text, record) => (
      <button onClick={() => }>Editar</button>
    ),
  }, */
  {
    dataIndex: "type",
    onFilter: (value, record) => record.type.indexOf(value) === 0,
    filters: [
      { text: 'General', value: 'general' },
      { text: 'Tarjeta de crédito', value: 'creditCard' },
    ],
    render: () => null,
  },
];