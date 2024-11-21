import React from "react"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { Button } from "antd"

const Cart = () => {
  return (
    <>
      <div style={{ marginLeft: 125, marginRight: 118, marginTop: 16 }}>
        <div style={{ fontSize: 25, fontWeight: 500 }}>Giỏ Hàng</div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <span>
            <ShoppingCartOutlined style={{ fontSize: 25, paddingRight: 10 }} />
          </span>
          <div>Không có sản phẩm nào trông giỏ hàng của bạn</div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="primary">Tiếp Tục Mua Sắm</Button>
        </div>
      </div>
    </>
  )
}

export default Cart
