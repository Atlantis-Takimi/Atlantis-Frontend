import React, {useState} from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

import {useRef} from "react";
/*import { themeContext } from "../../Context";*/
const Contact = () => {
  /*const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;*/
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_10anppo",
        "template_dvvger9",
        form.current,
        "INQkgUvhEnFq_9h-y"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          {/*<span style={{color: darkMode?'white': ''}}>Get in Touch</span>*/}
          <span>İletişim</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="İsim-Soyisim"/>
          <input type="email" name="user_email" className="user" placeholder="E-mail"/>
          <textarea name="message" className="user" placeholder="Mesaj"/>
          <input type="submit" value="Gönder" className="button"/>
          <span>{done && "Bizimle iletişime geçtiğiniz için teşekkürler!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;