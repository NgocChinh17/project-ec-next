import React, { useMemo } from "react"
import { Image } from "antd"

import productkhuyenmai from "../../../public/assets/image/productkhuyenmai.webp"

const mypham = [
  {
    id: 1,
    name: "mỹ phẩm",
  },
  {
    id: 2,
    name: "dưỡng da",
  },
  {
    id: 3,
    name: "dụng cụ",
  },
]

const LayoutAllProduct = () => {
  const renderProductItems = mypham.map((item) => (
    <div
      key={item.id}
      style={{
        padding: 10,
        display: "inline-block",
        cursor: "pointer",
      }}
    >
      {item.name}
    </div>
  ))

  const renderItems = useMemo(() => {
    return (
      <>
        <div
          style={{
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: 200,
            height: 300,
            background: "white",
            borderRadius: "10px",
          }}
        >
          <Image
            width={200}
            src={productkhuyenmai.src}
            alt="productkhuyenmai"
            preview={false}
            style={{ borderRadius: 10 }}
          />
          <div style={{ textAlign: "center", marginTop: 25 }}>
            <div>Product 1</div>
            <div>200.000 VND</div>
          </div>
        </div>
      </>
    )
  }, [])

  return (
    <>
      <div
        style={{
          textAlign: "center",
          background: "#fff2eb",
          height: "120vh",
          width: "100%",
        }}
      >
        <div style={{ paddingTop: 16, fontSize: 20, fontWeight: 500 }}>
          Tất Cả Sản Phẩm
        </div>
        {renderProductItems}

        <div
          style={{
            marginLeft: 125,
            marginRight: 118,
            marginTop: 16,
          }}
        >
          {renderItems}
        </div>
      </div>
    </>
  )
}

export default LayoutAllProduct
