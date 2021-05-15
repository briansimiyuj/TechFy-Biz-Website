import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>Web design</li>
                  <li>Development</li>
                  <li>Hosting</li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#about-us">About us</a>
                  </li>
                  <li>
                    <a href="#our-services">Products</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3 className="name">Techfy Biz</h3>
                <p>
                  We are a young company always looking for new and creative
                  ideas to help you with our products in your everyday work.
                </p>
              </div>
              <div className="col item social">
                <a href="https://www.facebook.com/techfybiz" target="_blank">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com/TechFyBiz" target="_blank">
                  <FaTwitter />
                </a>
                <a href="https://www.instagram.com/techfybiz/" target="_blank">
                  <FaInstagram />
                </a>
                <a href="https://api.whatsapp.com/send?phone=254743684703">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            <p className="copyright">Techfy-Biz © 2021</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
