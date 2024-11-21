import React, { useMemo } from "react"
import { Col, Flex, Image, Row, Select, Pagination } from "antd"

import products1 from "../../../public/assets/ImageProduct/products1.webp"

const Products = () => {
  const renderItemsProducts = useMemo(() => {
    return (
      <Flex wrap gap="45px">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            style={{
              border: "1px solid gray",
              borderRadius: 10,
              padding: 10,
            }}
            key={i}
          >
            <Image
              src={products1.src}
              alt="Chưa thêm"
              preview={false}
              width={200}
            />
            <div>Tên Sản Phẩm: abc</div>
            <div>Giá: 200.000 VND</div>
          </div>
        ))}
      </Flex>
    )
  }, [])

  return (
    <>
      <div style={{ marginLeft: 125, marginRight: 118 }}>
        <Row gutter={[16, 16]}>
          <Col span={12} style={{ fontSize: 20 }}>
            Danh Sách Sản Phẩm
          </Col>
          <Col span={12}>
            <Select
              labelInValue
              defaultValue={{ value: "lucy", label: "Mặc Định" }}
              placeholder="Mặc Định"
              style={{ width: 200, float: "right" }}
              allowClear
              options={[
                {
                  value: "asc",
                  label: "Giá Tăng Dần",
                },
                {
                  value: "desc",
                  label: "Giá Giảm Dần",
                },
                {
                  value: "productsNews",
                  label: "Hàng Mới Nhất",
                },
                {
                  value: "productsOlds",
                  label: "hàng Cũ Nhất",
                },
              ]}
            />
          </Col>
          {renderItemsProducts}
        </Row>
      </div>

      <div
        style={{
          marginTop: 10,
          marginRight: 118,
        }}
      >
        <Pagination align="end" defaultCurrent={1} total={50} />
      </div>
    </>
  )
}

export default Products
