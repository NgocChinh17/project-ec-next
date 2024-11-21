import { Image, Carousel } from "antd"

import productkhuyenmai from "../../../public/assets/image/productkhuyenmai.webp"
import productkhuyenmai2 from "../../../public/assets/image/productkhuyenmai2.webp"
import productkhuyenmai3 from "../../../public/assets/image/productkhuyenmai3.webp"
import khuyenmai20 from "../../../public/assets/image/khuyenmai20.webp"

const BannerPromotion = () => {
  return (
    <>
      <div style={{ marginLeft: 125, marginRight: 118, marginTop: 16 }}>
        <Image
          src="https://bizweb.dktcdn.net/100/459/658/themes/935500/assets/promotion_module_background.png?1728351069170"
          alt="banner"
          preview={false}
          width={"100%"}
        />
        {/* <h2>Khuyến Mãi</h2> */}
      </div>

      <div style={{ display: "inline-block", marginLeft: 125 }}>
        <Carousel
          arrows
          infinite={true}
          draggable={true}
          autoplay={true}
          dots={false}
          style={{ width: 450, display: "inline-block" }}
        >
          <div>
            <Image
              src={productkhuyenmai.src}
              alt="sliderHeader_1"
              preview={false}
              height={250}
              width="100%"
            />
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 600 }}>
                Dầu gọi Keratin Smooth
              </h2>
              <h3>
                <div>
                  <span style={{ fontSize: 15, fontWeight: 500 }}>
                    Giảm Giá:
                  </span>{" "}
                  250.000 vnd
                </div>
                <div>
                  <span style={{ fontSize: 15, fontWeight: 500 }}>Giá:</span>{" "}
                  200.000 vnd
                </div>
              </h3>
            </div>
          </div>

          <div>
            <Image
              src={productkhuyenmai2.src}
              alt="sliderHeader_2"
              preview={false}
              height={250}
              width="100%"
            />
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 600 }}>
                Dầu gọi Keratin Smooth
              </h2>
              <h3>
                <div>
                  <span style={{ fontSize: 15, fontWeight: 500 }}>
                    Giảm Giá:
                  </span>{" "}
                  250.000 vnd
                </div>
                <div>
                  <span style={{ fontSize: 15, fontWeight: 500 }}>Giá:</span>{" "}
                  200.000 vnd
                </div>
              </h3>
            </div>
          </div>

          <div>
            <Image
              src={productkhuyenmai3.src}
              alt="sliderHeader_2"
              preview={false}
              height={250}
              width="100%"
            />
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 600 }}>
                Dầu gọi Keratin Smooth
              </h2>
              <h3>
                <div>
                  <span style={{ fontSize: 15, fontWeight: 500 }}>
                    Giảm Giá:
                  </span>{" "}
                  250.000 vnd
                </div>
                <div>
                  <span style={{ fontSize: 15, fontWeight: 500 }}>Giá:</span>{" "}
                  200.000 vnd
                </div>
              </h3>
            </div>
          </div>
        </Carousel>
      </div>

      <div style={{ float: "right", marginRight: 118 }}>
        <Image
          src={khuyenmai20.src}
          alt="khuyenmai20"
          preview={false}
          height={330}
          width={"820px"}
        />
      </div>
    </>
  )
}

export default BannerPromotion
