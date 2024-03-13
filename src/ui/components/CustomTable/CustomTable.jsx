import { Table } from "antd";
import { useNavigate } from "react-router";

const CustomTable = ({
  isLoading,
  rowKey,
  size,
  footer,
  data,
  columns,
  path,
  total,
  page,
  onChange,
}) => {
  const navigate = useNavigate();

  return (
    <Table
      rowKey={rowKey}
      scroll={{ x: "max-content" }}
      loading={isLoading}
      size={size}
      onRow={(record, rowIndex) => {
        return {
          onClick: () => {
            navigate(`/${path}/${record.walletId}`, { state: { record } });
          },
        };
      }}
      dataSource={data}
      columns={columns}
      pagination={{
        position: ["bottomCenter"],
        total: total,
        showTotal: (total, range) =>
          `Mostrando ${range[0]}-${range[1]} de ${total} resultados`,
        defaultCurrent: 1,
        current: page,
        onChange: onChange,
      }}
      footer={() => footer}
    ></Table>
  );
};

export default CustomTable;
