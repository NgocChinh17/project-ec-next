"use client"
import React from "react"
import {
  DashboardOutlined,
  HistoryOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons"
import { Avatar, Input, Image, Dropdown, Space } from "antd"
import Link from "next/link"
import type { MenuProps } from "antd"

const { Search } = Input

const url =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"

const HeaderAdmin = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Tài Khoản Của Tôi",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "5",
      label: <Link href={"/dashboard"}>Admin</Link>,
      icon: <DashboardOutlined />,
    },
    {
      key: "2",
      label: "Thôn tin tài khoản",
      icon: <ProfileOutlined />,
    },
    {
      key: "3",
      label: "Lịch Sử Mua Hàng",
      icon: <HistoryOutlined />,
    },
    {
      key: "4",
      label: <Link href="/auth/login">Đăng Nhập</Link>,
      icon: <LogoutOutlined />,
    },
  ]

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <Link
        href={"/"}
        style={{
          fontSize: 25,
          fontWeight: 500,
          color: "black",
          marginLeft: 90,
        }}
      >
        Logo
      </Link>

      <Search placeholder=" search" style={{ width: 300 }} />

      <div style={{ marginRight: 20 }}>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar
                src={<Image preview={false} src={url} alt="avatar" />}
                style={{ marginLeft: 20, marginBottom: 13, cursor: "pointer" }}
              />
              <span style={{ cursor: "pointer" }}>Admin user</span>
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  )
}

export default HeaderAdmin
