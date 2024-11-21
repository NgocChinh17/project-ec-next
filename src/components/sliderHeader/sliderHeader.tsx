import React from "react"
import { Carousel, Image } from "antd"

import sliderHeader_1 from "../../../public/assets/image/sliderHeader_1.webp"
import sliderHeader_2 from "../../../public/assets/image/sliderHeader_2.webp"

const sliderHeader = () => {
  return (
    <>
      <Carousel arrows infinite={true} draggable={true} autoplay={true}>
        <div>
          <Image
            src={sliderHeader_1.src}
            alt="sliderHeader_1"
            preview={false}
          />
        </div>
        <div>
          <Image
            src={sliderHeader_2.src}
            alt="sliderHeader_2"
            preview={false}
          />
        </div>
      </Carousel>
    </>
  )
}

export default sliderHeader
