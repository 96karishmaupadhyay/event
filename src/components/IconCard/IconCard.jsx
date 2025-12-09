import React from "react";

const IconCard = ({ icon, name, active }) => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center rounded shadow-sm"
      style={{
        width: "200px",
        height: "160px",
        cursor: "pointer",
        backgroundColor: active ? "#E9F4FF" : "#FAFBFE", // active background
        border: active ? "1px solid #009BFF" : "1px solid #E5E7EB", // active border
        transition: "0.3s"
      }}
    >
      <img
        src={icon}
        alt={name}
        style={{ width: "40px", height: "40px" }}
      />
      <h6 className="fw-semibold text-center mt-2 m-0">{name}</h6>
    </div>
  );
};

export default IconCard;
