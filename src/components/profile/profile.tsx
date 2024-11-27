"use client"

import React from "react"
import type { FormProps } from "antd"
import { Button, Flex, Form, Input } from "antd"

type FieldType = {
  username?: string
  password?: string
  remember?: string
  confirmPassword?: string
  email?: string
}

const Profile = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values)
  }

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo)
  }

  return (
    <div style={{ marginLeft: 125, marginTop: 16, width: 1200 }}>
      <Flex>
        <div style={{ fontSize: 25, fontWeight: 500, marginRight: 100 }}>
          Thông tin tài khoản
        </div>
        <div>
          <Form
            name="basic"
            labelCol={{ span: 12 }}
            wrapperCol={{ span: 100 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input style={{ width: 400 }} />
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
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    )
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item label={null} wrapperCol={{ span: 16, offset: 0 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "150%" }}
              >
                Cập Nhật
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Flex>
    </div>
  )
}

export default Profile
