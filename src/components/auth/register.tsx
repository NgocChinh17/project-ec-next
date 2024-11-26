"use client"
import React from "react"
import type { FormProps } from "antd"
import { Button, Form, Input } from "antd"
import Link from "next/link"

type FieldType = {
  username?: string
  fullName?: string
  email?: string
  password?: string
  passwordConf?: string
  remember?: string
}

const Register = () => {
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
        margin: "0px 500px 0 500px",
      }}
    >
      <h1 style={{ marginTop: 20, fontWeight: 600, fontSize: 30 }}>Đăng Ký</h1>
      <p>
        Nếu bạn Đã có tài khoản, đăng Nhập{" "}
        <Link href={"/auth/login"} style={{ color: "blue" }}>
          tại đây
        </Link>
      </p>
      <Form
        name="basic"
        labelCol={{ span: 20 }}
        wrapperCol={{ span: 40 }}
        style={{ width: "100%", padding: "10px 20px 0 20px" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          label="Re-enter password"
          name="passwordConf"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 80 }}>
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            Đăng Ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register
