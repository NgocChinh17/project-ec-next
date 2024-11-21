import React from "react"
import { Carousel, Image } from "antd"

import hangmoive1 from "../../../public/assets/ImageProduct/hangmoive1.webp"

const contentStyle: React.CSSProperties = {
  margin: "0px 10px",
  height: "auto",
  color: "#fff",
  display: "flex",
  textAlign: "center",
  background: "#364d79",
}

const SliderCarousel = () => {
  return (
    <>
      <Carousel
        adaptiveHeight={true}
        slidesToShow={4}
        draggable
        autoplay
        dots={false}
        style={{ marginLeft: 125, marginRight: 118, marginTop: 16 }}
      >
        <div style={{ background: "red" }}>
          <section style={contentStyle}>
            <Image src={hangmoive1.src} preview={false} alt="hangmoive1" />
          </section>
          <div style={{ marginLeft: 10 }}>
            <p>Tên Sản Phẩm: </p>
            <p>Giá Sản Phẩm: </p>
          </div>
        </div>
        <div>
          <section style={contentStyle}>
            <Image src={hangmoive1.src} preview={false} alt="hangmoive1" />
          </section>
          <div style={{ marginLeft: 10 }}>
            <p>Tên Sản Phẩm: </p>
            <p>Giá Sản Phẩm: </p>
          </div>
        </div>
        <div>
          <section style={contentStyle}>
            <Image src={hangmoive1.src} preview={false} alt="hangmoive1" />
          </section>
          <div style={{ marginLeft: 10 }}>
            <p>Tên Sản Phẩm: </p>
            <p>Giá Sản Phẩm: </p>
          </div>
        </div>
        <div>
          <section style={contentStyle}>
            <Image src={hangmoive1.src} preview={false} alt="hangmoive1" />
          </section>
          <div style={{ marginLeft: 10 }}>
            <p>Tên Sản Phẩm: </p>
            <p>Giá Sản Phẩm: </p>
          </div>
        </div>
      </Carousel>
    </>
  )
}

export default SliderCarousel
