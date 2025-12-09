import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/eventlogo.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className={styles["nav-top"]}>
        <p>
          Stay updated with the latest events and maximize your experience with
          our platform.
        </p>
      </div>
      <div className={styles["navbar"]}>
        <div>
          <img src={logo} alt="logo" className={styles["logo"]} onClick={()=>navigate("/")}/>
        </div>
        <div className={styles["nav-right"]}>
          <ul className={styles["nav-list"]}>
            <li>Find Events</li>
            <li>Venues</li>
            <li>Tickets</li>
            <li>Workshops</li>
            <li>Event Managemeny Software</li>
            <li>Services</li>
          </ul>
          <button className={styles["my-booking-btn"]} onClick={()=>navigate("/my-bookings")}>My Bookings</button>
        </div>
      </div>
    
    </>
  );
};

export default Navbar;
