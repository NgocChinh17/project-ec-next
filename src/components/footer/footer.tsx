import React from "react"
import { Button, Col, Input, Row, Space } from "antd"
import {
  AimOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  MessageOutlined,
  PhoneOutlined,
  YoutubeOutlined,
} from "@ant-design/icons"

const Footer = () => {
  return (
    <>
      <div style={{ background: "#ffece1", marginTop: 16 }}>
        <div
          style={{
            marginLeft: 125,
            marginRight: 118,
            fontSize: 25,
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 0px 20px 0px",
          }}
        >
          <FacebookOutlined /> <MessageOutlined /> <InstagramOutlined />
          <YoutubeOutlined />
          <span>Nhận bản tin làm đẹp từ chúng tôi</span>
          <span>
            <Space style={{ width: "100%" }}>
              <Input
                style={{ width: 300 }}
                placeholder="Nhập email của bạn"
                allowClear
                suffix={
                  <Button
                    style={{
                      backgroundColor: "#ffb9a4",
                      color: "#a05139",
                      marginRight: "-8px",
                    }}
                  >
                    Submit
                  </Button>
                }
              />
            </Space>
          </span>
        </div>
      </div>

      <div
        style={{
          marginLeft: 125,
          marginRight: 118,
          paddingBottom: 20,
          backgroundImage:
            "url(//bizweb.dktcdn.net/100/459/658/themes/935500/assets/bg-footer.jpg?1728351069170)",
        }}
      >
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <div style={{ fontSize: 25 }}>Logo</div>
            <EnvironmentOutlined /> <span>abc,def,gbc</span> <br />
            <MailOutlined /> <span>abc@gmail.com</span> <br />
            <PhoneOutlined /> <span>0123456789</span> <br />
            <AimOutlined /> <span>hệ Thống Cửa Hàng</span>
          </Col>
          <Col span={8}>
            <div style={{ fontSize: 25 }}>Hổ Trợ Khách Hàng</div>
            <div>Trang Chủ</div>
            <div>Giới Thiệu</div>
            <div>Sản Phẩm</div>
            <div>Liên Hệ</div>
            <div>Tin Tức</div>
            <div>Giỏ Hàng</div>
            <div>Tìm Kiếm</div>
          </Col>
          <Col span={4}>
            <div style={{ fontSize: 25 }}>Chính Sách</div>
            <div>Trang Chủ</div>
            <div>Giới Thiệu</div>
            <div>Sản Phẩm</div>
            <div>Liên Hệ</div>
            <div>Tin Tức</div>
            <div>Giỏ Hàng</div>
            <div>Tìm Kiếm</div>
          </Col>
          <Col span={6}>
            <div style={{ fontSize: 25 }}>Giờ Mở Cửa</div>
            <div style={{ width: 300 }}>
              Từ 9:00 - 21:30 tất cả các ngày trong tuần (bao gồm cả các ngày
              lễ, ngày Tết).
            </div>
            <div style={{ fontSize: 25 }}>Góp Ý, Khiếu Nại</div>
            <PhoneOutlined /> <span>0123456789</span>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Footer
