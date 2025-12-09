import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import eventteam from "../../assets/eventteam.png";

const WebContentSecond = () => {
  return (
    <div className="bg-custom">
      <Container>
        <Row className="align-items-center flex-column-reverse flex-md-row ">

          {/* Right Side - Content */}
          <Col md={7} className="mb-4">
            <p className="text-primary fs-5 fw-bold">
              TRACKING EVENTS FOR YOU AND YOUR TEAM.
            </p>

            <h2 className="fw-bold mb-3 text-muted">Event Tracking</h2>

            <p className="text-secondary">
              We provide comprehensive tools to help you track and manage your
              events efficiently. Whether it's a small meeting or a large
              conference, our platform ensures that you stay organized and
              informed.
            </p>
          </Col>

          {/* Left Side - Image */}
          <Col
            md={5}
            className="text-center  mb-md-0 d-flex align-items-end "
              // ensures bottom effect
          >
            <img
              src={eventteam}
              alt="team"
              className="img-fluid"
              style={{ height: "360px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WebContentSecond;
