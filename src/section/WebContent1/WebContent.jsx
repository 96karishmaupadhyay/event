import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/eventlogo.png";
import tickicon from "../../assets/tick-blue.png";

const WebContent = () => {
  return (
    <div className="py-5 bg-custom">
      <Container>
        <Row className="align-items-center flex-column-reverse flex-md-row">
          
          {/* Right Side - Content */}
           <Col md={5} className="text-center mb-4 mb-md-0">
            <img
              src={logo}
              alt="logo"
              className="img-fluid"
              style={{ maxWidth: "300px" }}
            />
          </Col>
        

          {/* Left Side - Logo */}
           <Col md={7} className="mb-4">
            <p className="text-primary fs-5 fw-bold">Connecting people eventhroughts</p>

            <h2 className="fw-bold mb-3 text-muted">Event 
               <span className="text-primary"> Tracking</span> </h2>

            <p className="text-secondary">
              Our goal is to deliver an exceptional event experience in a
              courteous, respectful, and engaging manner. We hope you will allow
              us to help you stay updated and connected through our platform.
            </p>

            <div className="mt-4">
              <p className="d-flex align-items-center gap-2">
                <img src={tickicon} alt="tick" width={22} />
                Stay Updated About Events
              </p>

              <p className="d-flex align-items-center gap-2">
                <img src={tickicon} alt="tick" width={22} />
                Check Event Details Online
              </p>

              <p className="d-flex align-items-center gap-2">
                <img src={tickicon} alt="tick" width={22} />
                Manage Your Bookings
              </p>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default WebContent;
