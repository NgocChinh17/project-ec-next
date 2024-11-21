import React from "react"
import { Card, Carousel, Image } from "antd"

import logo1 from "../../../public/assets/brandLogo/logo1.webp"
import logo2 from "../../../public/assets/brandLogo/logo2.webp"

const FamousBrands = () => {
  return (
    <>
      <div
        className="slider-container"
        style={{
          fontSize: 30,
          fontWeight: 500,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Thương Hiệu Nổi Tiếng
      </div>

      <Carousel
        adaptiveHeight={true}
        slidesToShow={4}
        draggable
        autoplay
        dots={false}
        centerMode={true}
        style={{
          marginBottom: 20,
          marginLeft: 125,
          marginRight: 118,
          justifyContent: "center",
        }}
      >
        <div>
          <Card
            hoverable
            style={{ width: 150, height: "auto" }}
            cover={<Image alt="example" src={logo1.src} preview={false} />}
            title={false}
          />
        </div>

        <div>
          <Card
            hoverable
            style={{ width: 150, height: "auto" }}
            cover={<Image alt="example" src={logo1.src} preview={false} />}
            title={false}
          />
        </div>

        <div>
          <Card
            hoverable
            style={{ width: 150, height: "auto" }}
            cover={<Image alt="example" src={logo2.src} preview={false} />}
            title={false}
          />
        </div>

        <div>
          <Card
            hoverable
            style={{
              width: 150,
              height: "auto",
              // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
            cover={<Image alt="example" src={logo2.src} preview={false} />}
            title={false}
          />
        </div>
      </Carousel>
    </>
  )
}

export default FamousBrands
