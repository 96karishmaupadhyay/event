import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import phoneImg from "../../assets/eventmobile.png";   // your phone mockup image
import google from "../../assets/playstore.png";   // google play icon
import appstore from "../../assets/apple-logo.png"; // app store icon
import arrow from "../../assets/down-arr.png";    // your arrow image (blue curved)

const DownloadAppSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#E9F2FF" }}>
      <Container>
        <Row className="align-items-center">

          {/* Left Image */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img
              src={phoneImg}
              alt="app preview"
              className="img-fluid"
              style={{ maxHeight: "420px" }}
            />
          </Col>

          {/* Right Content */}
          <Col md={6}>
            <div className="position-relative mb-2">
              <img
                src={arrow}
                alt="arrow"
                className="position-absolute"
                style={{
                  left: "-38px",
                  top: "30px",
                  width: "30px",
                }}
              />
              <h2 className="fw-bold" style={{ color: "#0D3B66" }}>
                Download the <br />
                <span style={{ color: "#1A8CFF" }}>Event Tracker App</span>
              </h2>
            </div>

            <p className="text-muted fw-semibold">Get the link to download the app</p>

            {/* Input + Button */}
            <div className="d-flex gap-2 mb-4">
              <Form.Control
                type="text"
                placeholder="+91 Enter phone number"
                className="py-3"
              />
              <Button className="px-4" style={{ background: "#1A8CFF" }}>
                Send SMS
              </Button>
            </div>

            {/* Play Store + App Store */}
          <div className="d-flex gap-3 mt-3 store-buttons">

  <div className="store-btn d-flex align-items-center">
    <img
      src={google}
      alt="Google Play"
      className="store-icon"
      height={30}
    />
    <div className="ms-2 text-start">
    
      <div className="store-big">Google Play</div>
    </div>
  </div>

  <div className="store-btn d-flex align-items-center">
    <img
      src={appstore}
      alt="App Store"
      className="store-icon"
      height={30}
    />
    <div className="ms-2 text-start">
  
      <div className="store-big">App Store</div>
    </div>
  </div>

</div>

          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default DownloadAppSection;
