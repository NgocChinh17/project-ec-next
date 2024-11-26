"use client"

import React from "react"
import { Button, Form, Input } from "antd"
import type { FormProps } from "antd"

type FieldType = {
  username?: string
  phoneNumber?: string
  email?: string
  TextArea?: string
}

const FormContact = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values)
  }

  return (
    <>
      <Form<FieldType>
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, marginTop: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Tài khoản"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Họ và tên" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Số điện thoại"
          name="phoneNumber"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input placeholder="Số điện thoại" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="email" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Nội dung"
          name="TextArea"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input.TextArea placeholder="Nội dung" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Gửi
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default FormContact
