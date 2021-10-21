import React from "react";
import "./Footer.css";
import Image from "../../img/leaf.png";

function Footer() {
  return (
    <div>
      <div className="footer-container">
        <p>
          Copyright @ 2020 Dewe Tour - Muhammad Rizaldy - NIS. All Rights
          reserved
        </p>
        <img alt="leaf" src={Image}></img>
      </div>
    </div>
  );
}

export default Footer;
