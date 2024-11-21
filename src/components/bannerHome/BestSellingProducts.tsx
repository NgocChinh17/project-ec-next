import React, { useMemo } from "react"
import { Image } from "antd"

import productkhuyenmai from "../../../public/assets/image/productkhuyenmai.webp"

const BestSellingProducts = () => {
  const renderProductItems = useMemo(() => {
    return (
      <>
        <div
          style={{
            width: 200,
            height: 300,
            border: "1px solid #DEB887",
            borderRadius: 10,
          }}
        >
          <Image
            width={198}
            src={productkhuyenmai.src}
            alt="productkhuyenmai"
            preview={false}
            style={{ borderRadius: 20 }}
          />
          <div style={{ marginTop: 25, marginLeft: 10 }}>
            <div>Product 1</div>
            <div>200.000 VND</div>
          </div>
        </div>
      </>
    )
  }, [])
  return (
    <>
      <button
        style={{
          border: "1px solid black",
          padding: 10,
          borderTopLeftRadius: 20,
          borderBottomRightRadius: 20,
          fontSize: 16,
          fontWeight: 600,
          marginLeft: "42%",
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <span>Sản Phẩm Bán Chạy</span>
      </button>

      <div style={{ marginLeft: 125, marginRight: 118, marginTop: 16 }}>
        {renderProductItems}
      </div>
    </>
  )
}

export default BestSellingProducts
