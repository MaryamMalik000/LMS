
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import '../css/footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>CONTACT</h3>
            <p>329 Queensberry Street, North Melbourne</p>
            <p>VIC 3051, Australia.</p>
            <p>123 456 7890</p>
            <p>support@ProLearn.com</p>
          </div>
          <div className="col-md-3">
            <h3>COMPANY</h3>
            <ul className="footer-links">
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Become a Teacher</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>PROGRAMS</h3>
            <ul className="footer-links">
  <li>Web Development Bootcamp</li>
  <li>Data Science Masterclass</li>
  <li>Graphic Design Essentials</li>
  <li>Mobile App Development</li>
</ul>
          </div>
          <div className="col-md-3">
            <h3>SUPPORT</h3>
            <ul className="footer-links">
              <li>Documentation</li>
              <li>Forums</li>
              <li>Language Packs</li>
              <li>Release Status</li>
            </ul>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-6 d-flex flex-column align-items-center">
            <p className="newsletter-text">Subscribe to our newsletter for the latest updates</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="col-md-6">
            <ul className="social-icons">
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
