import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import eventfaq from "../../assets/eventfaq.jpg";
import Accordian from "../../components/Accordian/Accordian";

const FAQSection = () => {
  return (
    <section className="py-5 bg-light">
      <Container>

        {/* Heading */}
        <div className="text-center mb-5">
          <p className="text-primary fw-semibold">Get Your Answers</p>
          <h2 className="fw-bold">Frequently Asked Questions</h2>
        </div>

        {/* Content Row */}
        <Row className="align-items-center ">
          
          {/* Left — Image */}
          <Col md={6} className="text-center">
            <img
              src={eventfaq}
              alt="faq"
              className="img-fluid shadow-sm"
              style={{  objectFit: "cover" }}
            />
          </Col>

          {/* Right — FAQ Accordion */}
          <Col md={6}>
            <Accordian />
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default FAQSection;
