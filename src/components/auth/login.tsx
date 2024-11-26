"use client"
import React from "react"
// import type { FormProps } from "antd"
import { Button, Checkbox, Form, FormProps, Input, Space } from "antd"
import Link from "next/link"
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons"

type FieldType = {
  email?: string
  password?: string
  remember?: string
}

const Login = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values)
  }

  return (
    <div
      style={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px 550px 0 550px",
      }}
    >
      <h1 style={{ marginTop: 20, fontWeight: 600, fontSize: 30 }}>
        Đăng Nhập
      </h1>
      <p>
        Nếu bạn chưa có tài khoản,{" "}
        <Link href={"/auth/register"} style={{ color: "blue" }}>
          đăng ký tại đây
        </Link>
      </p>
      <Form
        name="basic"
        labelCol={{ span: 20 }}
        wrapperCol={{ span: 40 }}
        style={{ width: "100%", padding: "15px 20px 0 20px" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Mật Khẩu"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 0, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 80 }}>
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            Đăng Nhập
          </Button>
        </Form.Item>
      </Form>
      <p>Quên Mật Khẩu</p>
      <p>Hoặc Đăng Nhập Bằng</p>
      <Space style={{ marginBottom: 20, marginTop: 10 }}>
        <Button icon={<GoogleOutlined />} style={{ color: "red", width: 200 }}>
          Google
        </Button>
        <Button
          icon={<FacebookOutlined />}
          style={{ color: "blue", width: 200 }}
        >
          Facebook
        </Button>
      </Space>
    </div>
  )
}

export default Login
