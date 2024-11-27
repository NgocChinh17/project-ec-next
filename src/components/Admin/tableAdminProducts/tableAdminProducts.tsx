import React from "react"
import {
  Table,
  Drawer,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  Button,
} from "antd"
import type { TableColumnsType } from "antd"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import type { FormProps } from "antd"

import "../../../styles/stylesTableAdminProducts.css"

const { RangePicker } = DatePicker

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
  description: string
}

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

const TableAdminProducts = () => {
  const [open, setOpen] = React.useState<boolean>(false)
  const [loading, setLoading] = React.useState<boolean>(true)
  const [form] = Form.useForm()

  const showLoading = () => {
    setOpen(true)
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  const renderAction = () => {
    return (
      <div>
        <EditOutlined
          style={{
            fontSize: 20,
            cursor: "pointer",
            paddingRight: 10,
            color: "red",
          }}
          onClick={showLoading}
        />

        <DeleteOutlined
          style={{ fontSize: 20, cursor: "pointer", color: "orange" }}
        />
      </div>
    )
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: 100,
      render: renderAction,
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
    {
      key: 2,
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      description:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
    },
    {
      key: 4,
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      description:
        "My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.",
    },
    {
      key: 5,
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      description:
        "My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.",
    },
  ]

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values)
  }

  return (
    <div>
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

      <div>
        <Drawer
          closable
          destroyOnClose
          title={<p>Cập Nhật Sản Phẩm</p>}
          placement="right"
          open={open}
          loading={loading}
          onClose={() => setOpen(false)}
          width={"40%"}
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
              <RangePicker style={{ width: "100%" }} />
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
                Cập Nhật
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
      </div>
    </div>
  )
}

export default TableAdminProducts
