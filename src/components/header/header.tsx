// Header.tsx
"use client"
import {
  DashboardOutlined,
  HistoryOutlined,
  LogoutOutlined,
  ProfileOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Badge, Col, Divider, Dropdown, Input, Popover, Row } from "antd"
import Link from "next/link"

const { Search } = Input
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
//show cart
const text = <span>Giỏ Hàng Của Tôi</span>
const content = (
  <div>
    <span>image</span> <span>title</span>
  </div>
)

//menu
const listMenu = [
  {
    key: "1",
    label: <Link href="/">Trang Chủ</Link>,
  },
  {
    key: "2",
    label: <Link href="/introduce">Giới Thiệu</Link>,
  },
  {
    key: "3",
    label: <Link href="/products">Sản Phẩm</Link>,
  },
  {
    key: "4",
    label: <Link href="/contact">Liên hệ</Link>,
  },
  {
    key: "5",
    label: <Link href="/news">Tin Tức</Link>,
  },
  {
    key: "6",
    label: <Link href="/cart">Giỏ Hàng</Link>,
  },
  {
    key: "7",
    label: (
      <Popover
        title={
          <Search placeholder="input search text" style={{ width: 200 }} />
        }
        placement="bottom"
        trigger="click"
      >
        <SearchOutlined />
      </Popover>
    ),
  },
  {
    key: "9",
    label: (
      <Popover placement="bottom" title={text} content={content}>
        <Badge size="small" count={5}>
          <ShoppingCartOutlined style={{ fontSize: 20 }} />
        </Badge>
      </Popover>
    ),
  },
  {
    key: "8",
    label: (
      <Dropdown trigger={["click"]} menu={{ items }}>
        <UserOutlined />
      </Dropdown>
    ),
  },
]
const Header = () => {
  const renderHeader = listMenu.map((item) => (
    <div key={item.key}>{item.label}</div>
  ))

  return (
    <>
      <Row>
        <Col span={20} offset={2}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 20,
              marginTop: 20,
              cursor: "pointer",
            }}
          >
            {renderHeader}
          </div>
        </Col>
      </Row>

      <Divider />
    </>
  )
}

export default Header
