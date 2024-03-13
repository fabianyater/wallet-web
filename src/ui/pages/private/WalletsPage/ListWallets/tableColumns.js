import { formatCurrency, sortNames } from "../../../../../utilities/generalUtils";
import SortArrows from "../../../../components/SortArrows/SortArrows";

export const columns = [
  {
    title: "Nombre",
    rowKey: 1,
    dataIndex: "name",
    sorter: (a, b) => sortNames(a, b),
    sortIcon: ({ sortOrder }) => <SortArrows sortOrder={sortOrder} />,
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
    rowKey: 2,
    dataIndex: "type",
    sorter: (a, b) => {
      const nameA = a.type ? a.type : "";
      const nameB = b.type ? b.type : "";
      return nameA.localeCompare(nameB);
    },
    sortIcon: ({ sortOrder }) => <SortArrows sortOrder={sortOrder} />,
    render: (type, record) => {
      const style = {
        color: record.type === "general" ? '#5fff98' : 'yellow',
        padding: '2px 10px',
        border: `1px solid ${record.type === "general" ? '#489966' : 'yellow'}`,
        fontSize: '.75rem',
        lineHeight: '1rem',
        borderRadius: '5px',
        fontWeight: '500',
        background: '#3d433f',
        textTransform: "capitalize"
      }

      return <span style={style}>{type}</span>
    }
  },
  {
    title: "Balance",
    rowKey: 3,
    dataIndex: "balance",
    sorter: (a, b) => a.balance - b.balance,
    sortIcon: ({ sortOrder }) => <SortArrows sortOrder={sortOrder} />,
    render: (balance) => {
      return <span>{formatCurrency(balance, 2)}</span>
    }
  },
  {
    title: "Moneda",
    rowKey: 4,
    dataIndex: "currency",
    sorter: (a, b) => a.currency - b.currency,
    sortIcon: ({ sortOrder }) => <SortArrows sortOrder={sortOrder} />,
    render: (currency) => {
      return <span>{currency.toUpperCase()}</span>
    }
  },
  {
    title: "Excluída",
    rowKey: 5,
    dataIndex: "isExcluded",
    sorter: (a, b) => a.currency - b.currency,
    sortIcon: ({ sortOrder }) => <SortArrows sortOrder={sortOrder} />,
    render: (value) => {
      return (
        <span style={{ margin: 0 }}>
          {value ?
            <input
              type="checkbox"
              title="Sí"
              checked
              style={{ accentColor: "#0BD08A" }} unselectable="off"
              readOnly
            />
            :
            <input
              title="No"
              type="checkbox"
              unselectable="off"
              checked={false}
              readOnly
            />}
        </span>
      );
    },
  },
  {
    dataIndex: "type",
    rowKey: 6,
    onFilter: (value, record) => record.type.indexOf(value) === 0,
    filters: [
      { text: 'General', value: 'general' },
      { text: 'Tarjeta de crédito', value: 'creditCard' },
    ],
    render: () => null,
  },
];