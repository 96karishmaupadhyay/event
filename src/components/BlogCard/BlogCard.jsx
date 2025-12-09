import React from "react";
import eventblog from "../../assets/eventblog.jpg";
import person from "../../assets/person.png";

const BlogCard = () => {
  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden" style={{ maxWidth: "380px" }}>
      {/* Image */}
      <img
        src={eventblog}
        alt="blog"
        className="card-img-top"
        style={{ height: "220px", objectFit: "cover" }}
      />

      {/* Body */}
      <div className="card-body">
        <p className="text-muted small mb-1">Event | March 31, 2022</p>

        <h5 className="fw-bold mb-3">
          5 Strategies to Maximize Your Event Attendance
        </h5>

        {/* Author */}
        <div className="d-flex align-items-center gap-2">
          <img
            src={person}
            alt="author"
            className="rounded-circle"
            width={35}
            height={35}
            style={{ objectFit: "cover" }}
          />
          <span className="fw-semibold text-secondary">John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
