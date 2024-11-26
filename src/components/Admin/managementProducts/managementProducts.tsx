import React, { useState } from "react"
import { PlusCircleOutlined } from "@ant-design/icons"
import {
  Modal,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  Button,
  Table,
} from "antd"
import type { FormProps, TableColumnsType, TableProps } from "antd"

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const { RangePicker } = DatePicker

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
}

type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    showSorterTooltip: { target: "full-header" },
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value as string) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Age",
    dataIndex: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value as string) === 0,
  },
]

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
]

const ManagementProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form] = Form.useForm()

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    form.resetFields()
    setIsModalOpen(false)
  }

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values)
  }

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra)
  }

  return (
    <>
      <div style={{ width: "1200px" }}>
        <p style={{ fontSize: 25 }}>Quản lý sản phẩm</p>
        <div style={{ fontSize: 50 }}>
          <p style={{ fontSize: 16, color: "red" }}>
            Nhấn <PlusCircleOutlined /> để thêm sản phẩm mới
          </p>
          <PlusCircleOutlined style={{ marginLeft: 40 }} onClick={showModal} />

          <Modal
            title="Thêm Sản Phẩm"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
          >
            <Form
              {...formItemLayout}
              form={form}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              labelAlign="left"
            >
              <Form.Item
                label="Tên sản phẩm"
                name="name"
                rules={[{ required: true, message: "Please name!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Số Lượng Sản Phẩm"
                name="InputNumber"
                rules={[{ required: true, message: "Please input!" }]}
              >
                <InputNumber style={{ width: "100%" }} min={0} max={10} />
              </Form.Item>

              <Form.Item
                label="Giảm Giá"
                name="Mentions"
                rules={[{ required: true, message: "Please input!" }]}
              >
                <Mentions />
              </Form.Item>

              <Form.Item
                label="Loại Sản Phẩm"
                name="Select"
                rules={[{ required: true, message: "Please input!" }]}
              >
                <Select />
              </Form.Item>

              <Form.Item
                label="Ngày Đăng Bán "
                name="DatePicker"
                rules={[{ required: true, message: "Please input!" }]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                label="Sự Kiện Sale"
                name="RangePicker"
                rules={[{ required: true, message: "Please input!" }]}
              >
                <RangePicker />
              </Form.Item>

              <Form.Item
                label="Ghi Chú"
                name="TextArea"
                rules={[{ required: true, message: "Please input!" }]}
              >
                <Input.TextArea />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 18, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>

        <div style={{ marginTop: 20 }}>
          <Table<DataType>
            columns={columns}
            dataSource={data}
            onChange={onChange}
            showSorterTooltip={{ target: "sorter-icon" }}
          />
        </div>
      </div>
    </>
  )
}

export default ManagementProducts
