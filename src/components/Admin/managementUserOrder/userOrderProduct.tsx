import React from "react"
import TableAdminProducts from "../tableAdminProducts/tableAdminProducts"

const UserOrderProduct = () => {
  return (
    <div style={{ width: 1200 }}>
      <div style={{ fontSize: "25px", fontWeight: "500" }}>
        Quản lý đơn hàng
      </div>
      <TableAdminProducts />
    </div>
  )
}

export default UserOrderProduct
