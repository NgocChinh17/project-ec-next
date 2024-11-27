import React from "react"
import { Image } from "antd"

import homePage1 from "../../../public/assets/image/homePage1.webp"
import paypalHomepage from "../../../public/assets/image/paypalHomepage.webp"
import sieutoc2h from "../../../public/assets/image/sieutoc2h.webp"
import camketHomepage from "../../../public/assets/image/camketHomepage.webp"

const Banner1 = () => {
  return (
    <>
      <div style={{ marginLeft: 125, marginRight: 118 }}>
        <div style={{ display: "inline-block" }}>
          <Image src={homePage1.src} alt="homePage1" preview={false} />
        </div>

        <div style={{ float: "right" }}>
          <div style={{ display: "flex", marginBottom: 85 }}>
            <Image
              src={paypalHomepage.src}
              alt="paypalHomepage"
              preview={false}
            />
            <div style={{ float: "right", marginLeft: 20 }}>
              <h3>Thanh Toán</h3>
              <p style={{ wordWrap: "break-word", width: "400px" }}>
                Khách hàng có thể lựa chọn một hoặc nhiều hình thức thanh toán
              </p>
            </div>
          </div>

          <div style={{ display: "flex", marginBottom: 85 }}>
            <Image src={sieutoc2h.src} alt="paypalHomepage" preview={false} />
            <div style={{ float: "right", marginLeft: 20 }}>
              <h3>Siêu tốc 2H</h3>
              <p style={{ wordWrap: "break-word", width: "400px" }}>
                Chúng tôi cam kết hàng chính hãng và đảm bảo về chất lượng sản
                phẩm
              </p>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <Image
              src={camketHomepage.src}
              alt="paypalHomepage"
              preview={false}
            />
            <div style={{ float: "right", marginLeft: 20 }}>
              <h3>Cam kết chính hãng</h3>
              <p style={{ wordWrap: "break-word", width: "400px" }}>
                Chúng tôi cam kết hàng chính hãng và đảm bảo về chất lượng sản
                phẩm
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner1
