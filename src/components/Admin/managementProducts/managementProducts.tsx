import React, { useRef, useState } from "react"
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons"
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
  Space,
} from "antd"
import type {
  FormProps,
  InputRef,
  TableColumnsType,
  TableColumnType,
} from "antd"
import { FilterDropdownProps } from "antd/es/table/interface"

type DataIndex = keyof DataType

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

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
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

  const searchInput = useRef<InputRef>(null)

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"]
  ) => {
    confirm()
  }

  const handleReset = (clearFilters: () => void) => {
    clearFilters()
  }

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): TableColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    filterDropdownProps: {
      onOpenChange(open) {
        if (open) {
          setTimeout(() => searchInput.current?.select(), 100)
        }
      },
    },
  })

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%",
      ...getColumnSearchProps("age"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address"),
      sortDirections: ["descend", "ascend"],
    },
  ]

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
          <Table<DataType> columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  )
}

export default ManagementProducts
