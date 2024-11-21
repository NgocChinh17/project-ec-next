import React from "react"
import {
  AimOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons"
import FormContact from "../FormContact/formContact"

const Contact = () => {
  return (
    <div style={{ marginLeft: 250, marginRight: 250 }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61374.040386023546!2d108.12829755149455!3d15.967771103741782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421b0d77ce4bb1%3A0x8c97acc8764b4f31!2zSMOyYSBUaeG6v24sIEjDsmEgVmFuZywgRGEgTmFuZywgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1731395884057!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: "0px", display: "inline-block" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div style={{ float: "right", fontSize: 20 }}>
        <div>
          <span>
            <EnvironmentOutlined />{" "}
          </span>
          <span>Hòa Tiến, Hòa Vang, Đà Nẵng</span>
        </div>

        <div>
          <span>
            <MailOutlined />{" "}
          </span>
          <span>support@shop.com</span>
        </div>

        <div>
          <span>
            <PhoneOutlined />{" "}
          </span>
          <span>+84 123 456 789</span>
        </div>

        <div>
          <span>
            <AimOutlined />{" "}
          </span>
          <span>Hệ Thống Của Hàng</span>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <h2>Thông Tin Liên Hệ</h2>
        <p style={{ color: "gray", maxWidth: 800 }}>
          Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho chúng tôi.
          Chúng tôi sẽ trả lời bạn sau khi nhận được. Bạn hãy điền nội dung tin
          nhắn vào form dưới đây và gửi cho chúng tôi. Chúng tôi sẽ trả lời bạn
          sau khi nhận được.
        </p>

        <FormContact />
      </div>
    </div>
  )
}

export default Contact
