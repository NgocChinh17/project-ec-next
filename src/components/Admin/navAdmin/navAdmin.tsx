"use client"
import React, { useState } from "react"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  PlusCircleOutlined,
  ProductOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Button, Flex, Menu, MenuProps } from "antd"

import DashboardAdmin from "../dashboardAdmin/dashboardAdmin"
import ManagementProducts from "../managementProducts/managementProducts"
import ManagementUser from "../managementUser/managementUser"
import UserOrderProduct from "../managementUserOrder/userOrderProduct"

interface ClickEvent {
  key: string
}

type MenuItem = Required<MenuProps>["items"][number]

const items: MenuItem[] = [
  {
    key: "Dashboard",
    icon: <PieChartOutlined />,
    label: "Dashboard",
  },
  {
    key: "sub1",
    label: "Management Products",
    icon: <ProductOutlined />,
    children: [
      {
        key: "CreateProduct",
        icon: <PlusCircleOutlined />,
        label: "Create Product",
      },
      {
        key: "Management Orders Products",
        icon: <UnorderedListOutlined />,
        label: "User Order Product",
      },
    ],
  },
  {
    key: "sub2",
    label: "Management User",
    icon: <UserOutlined />,
    children: [
      { key: "CreateUser", icon: <UserAddOutlined />, label: "Create User" },
    ],
  },
]

const NavAdmin = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [keySelected, setKeySelected] = useState("Dashboard")

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const handleOnClick = ({ key }: ClickEvent) => {
    setKeySelected(key)
  }

  const renderPage = (key: string) => {
    switch (key) {
      case "Dashboard":
        return <DashboardAdmin />
      case "CreateProduct":
        return <ManagementProducts />
      case "Management Orders Products":
        return <UserOrderProduct />
      case "CreateUser":
        return <ManagementUser />
      default:
        return <DashboardAdmin />
    }
  }

  return (
    <div style={{ width: 233 }}>
      <Flex justify="space-between">
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16, width: 81 }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </Flex>

      <Flex>
        <Menu
          selectedKeys={[keySelected]}
          onClick={handleOnClick}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
          style={{ height: "100vh", maxHeight: "85vh" }}
        />
        <div style={{ marginLeft: 20 }}>{renderPage(keySelected)}</div>
      </Flex>
    </div>
  )
}

export default NavAdmin
