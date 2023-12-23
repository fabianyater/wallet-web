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
      }}
      footer={() => footer}
    ></Table>
  );
};

export default CustomTable;
