import { Table } from "antd";

const CustomTable = ({ isLoading, rowKey, size, footer, data, columns }) => {
  return (
    <Table
      rowKey={rowKey}
      scroll={{ x: "max-content" }}
      loading={isLoading} 
      size={size}
      dataSource={data}
      columns={columns}
      pagination={{
        position: ["bottomCenter"]
      }}
      footer={() => footer}
    ></Table>
  );
};

export default CustomTable;
