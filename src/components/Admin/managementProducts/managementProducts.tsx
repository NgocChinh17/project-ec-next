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
} from "antd"
import type { FormProps } from "antd"

import TableAdminProducts from "../tableAdminProducts/tableAdminProducts"

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
          <TableAdminProducts />
        </div>
      </div>
    </>
  )
}

export default ManagementProducts
