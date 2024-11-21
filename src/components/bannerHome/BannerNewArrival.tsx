import React from "react"
import { Image } from "antd"
import SliderCarousel from "../carousel/sliderCarousel"

const BannerNewArrival = () => {
  return (
    <>
      <div>
        <div style={{ marginLeft: 125, marginRight: 118, marginTop: 16 }}>
          <Image
            src="https://bizweb.dktcdn.net/100/459/658/themes/935500/assets/new_module_background.png?1728351069170"
            alt="banner"
            preview={false}
            width={"100%"}
          />
          {/* <h2>Hàng Mới về</h2> */}
        </div>
        <div>
          <SliderCarousel />
        </div>
      </div>
    </>
  )
}

export default BannerNewArrival
