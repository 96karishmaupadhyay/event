import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../../components/BlogCard/BlogCard";

const BlogSection = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        
        {/* Section Heading */}
        <div className="text-center mb-5">
          <p className="text-primary fw-semibold">Blog & News</p>
          <h2 className="fw-bold">Read Our Latest News</h2>
        </div>

        {/* Blog Cards Grid */}
        <Row className="g-4 justify-content-center">
          <Col md={4} sm={6}>
            <BlogCard />
          </Col>

          <Col md={4} sm={6}>
            <BlogCard />
          </Col>

          <Col md={4} sm={6}>
            <BlogCard />
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default BlogSection;
