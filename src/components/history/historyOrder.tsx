"use client"
import React from "react"
import { Button, Table } from "antd"
import type { TableColumnsType } from "antd"

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
  description: string
}

const columns: TableColumnsType<DataType> = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Address", dataIndex: "address", key: "address" },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    width: "150px",
    render: () => <Button style={{ color: "red" }}>Hủy đơn hàng</Button>,
  },
]

const data: DataType[] = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
]

const HistoryOrder = () => {
  return (
    <div style={{ marginLeft: 125, marginRight: 118 }}>
      <div style={{ fontSize: 25, fontWeight: "500", marginBottom: 20 }}>
        Lịch Sử Mua Hàng
      </div>
      <Table<DataType>
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data}
      />
    </div>
  )
}

export default HistoryOrder
