import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div>
        <EmailIcon className="icon"/>
        <span>   phamofanthony@gmail.com</span>
      </div>
      <div>
        <PhoneIcon className="icon"/>
        <span>   479-522-7055</span>
      </div>
    </div>
  );
}

export default Footer;
