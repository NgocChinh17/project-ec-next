import React from "react"
import { Image } from "antd"

import makeupSolutions from "../../../public/assets/makeupSolution/makeupSolution.webp"

const MakeupSolution = () => {
  return (
    <div
      style={{
        marginLeft: 125,
        marginRight: 118,
        marginTop: 16,
      }}
    >
      <div style={{ display: "inline-block" }}>
        <Image src={makeupSolutions.src} alt="makeupSolution" preview={false} />
      </div>

      <div style={{ float: "right" }}>
        <p style={{ fontSize: 25, fontWeight: "400" }}>
          Giải Pháp Trang Điểm Dễ Dàng Cho Phụ Nữ Việt
        </p>
        <p style={{ width: "650px", color: "gray" }}>
          Dựa trên kinh nghiệm 15 năm chinh chiến trong ngành làm đẹp và hợp tác
          với các tập đoàn mỹ phẩm nổi tiếng trên Thế giới, Makeup Artist Quách
          Ánh cùng những cộng sự của mình đã tạo nên thương hiệu mỹ phẩm
          Lemonade. Với các dòng sản phẩm đa công năng và tiện dụng được nghiên
          cứu dựa trên khí hậu và làn da của phụ nữ Việt, Lemonade giúp bạn hoàn
          thiện vẻ đẹp một cách nhanh chóng và dễ dàng hơn: Dễ dàng sử dụng, dễ
          dàng kết hợp và dễ dàng mang đi.
        </p>
      </div>
    </div>
  )
}

export default MakeupSolution
