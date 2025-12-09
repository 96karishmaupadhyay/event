import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import fb from "../../assets/fb.png";
import yt from "../../assets/yt.png";
import tw from "../../assets/twitter.png";
import pin from "../../assets/pinterest.png";
import logo from '../../assets/eventlogo.png'
const Footer = () => {
  return (
    <footer className="footer-section text-white bg-primary">
      <div className="container py-5">
        <div className="row align-items-start">

          {/* Logo + Social Icons */}
          <div className="col-md-3 mb-4">
           <img src={logo} alt="" height={100} />

            <div className="d-flex gap-3 mt-3 ms-2">
              <img src={fb} className="footer-image-icon" alt="facebook" height={40}/>
              <img src={tw} className="footer-image-icon" alt="twitter" height={40} />
              <img src={yt} className="footer-image-icon" alt="youtube" height={40}/>
              <img src={pin} className="footer-image-icon" alt="pinterest" height={40}/>
            </div>
          </div>

          {/* Footer Columns */}
          {[
            ["About Us", "Pricing", "Gallery", "Contact Us", "Privacy Policy"],
            ["Event Management", "Real-time Tracking", "Customizable Features", "Support", "Security"],
            ["About Us", "Pricing", "Gallery", "Contact Us", "Privacy Policy"]
          ].map((column, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <ul className="footer-list">
                {column.map((item, i) => (
                  <li className="d-flex align-items-center gap-2" key={i}>
                    <IoIosArrowForward size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom py-4 px-4 px-5 px-md-10">
        ©2025 EventTracker.com — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
