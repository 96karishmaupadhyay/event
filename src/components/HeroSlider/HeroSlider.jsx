import React from "react";
import img from "../../assets/home.png";
import SearchEventBox from "../../section/SearchEventBox/SearchEventBox";
import IconCardSection from "../../section/IconCardSection/IconCardSection";


const HeroSlider = () => {
  return (
    <div className="container-fluid bg-custom p-8 pb-0  "  style={{ height: "80vh"}}>
      <div className="row align-items-center justify-content-center">
        {/* Left Content */}
        <div className="col-md-6 text-md-start text-center px-4">
          <h5 className=" ">
            Skip the hassle! Track Online
          </h5>
          <h2 className="fw-bold display-6 ">
            Event <span className="text-primary">Tracker</span>
          </h2>
          <p className="lead text-muted ">
            Connect instantly with our platform to manage and track your events
            efficiently.
          </p>
          <button className="btn btn-primary btn-sm mt-1">Find Events</button>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center mt-2 mt-md-0">
          <img
            src={img}
            alt="Event Tracker"
            className=""
            style={{ maxWidth: "450px" }}
          />
        </div>
      </div>
      <SearchEventBox/>
      <div className=" bg-white">
<IconCardSection/>
      </div>
      
    </div>
  );
};

export default HeroSlider;
