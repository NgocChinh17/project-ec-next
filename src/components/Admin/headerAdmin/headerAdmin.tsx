"use client"
import { Avatar, Input, Image } from "antd"
import Link from "next/link"
import React from "react"

const { Search } = Input

const url =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"

const HeaderAdmin = () => {
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
        <Avatar
          src={<Image preview={false} src={url} alt="avatar" />}
          style={{ marginLeft: 20, marginBottom: 13 }}
        />
      </div>
    </div>
  )
}

export default HeaderAdmin
