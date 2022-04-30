import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <a href="https://www.instagram.com/firatresmihesap/?hl=en"><Insta color="#FF6456" size={"3rem"} /></a>
          <a href="https://www.facebook.com/frtbasinyayin"><Facebook color="#FF6456" size={"3rem"} /></a>
          <a href="https://twitter.com/firatresmihesap"><Twitter color="#FF6456" size={"3rem"} /></a>
        </div>
        <span>© 2022 Fırat Üniversitesi - Tüm hakları saklıdır.</span>
      </div>
    </div>
  );
};

export default Footer;