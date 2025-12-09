import React from "react";

export default function TimeSelector({
  availableSlots,
  details,
  handleBooking,
  selectedDate,
}) {
  const handleClick = (slot) => {
    handleBooking({
      ...details,
      bookingDate: selectedDate,
      bookingTime: slot,
    });
  };

  const renderSlotGroup = (label, slots) => {
    if (slots.length === 0) return null;

    return (
      <div className="py-3 border-bottom">
        <div className="d-flex align-items-center flex-wrap px-md-4">
          {/* Label */}
          <div className="fw-semibold fs-6 mb-2 mb-md-0" style={{ width: "100%", maxWidth: "150px" }}>
            {label}
          </div>

          {/* Slot buttons */}
          <div className="d-flex flex-wrap gap-2">
            {slots.map((slot) => (
              <button
                key={slot}
                className="btn btn-outline-primary btn-sm rounded-2"
                onClick={() => handleClick(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-3">
      {renderSlotGroup("Morning", availableSlots.morning)}
      {renderSlotGroup("Afternoon", availableSlots.afternoon)}
      {renderSlotGroup("Evening", availableSlots.evening)}
    </div>
  );
}
