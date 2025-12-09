import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { format, add, isEqual, startOfDay } from "date-fns";

export default function DaySelector({
  selectedDate,
  setSelectedDate,
  totalSlots,
}) {
  const date = startOfDay(new Date());
  const dateItems = [];

  for (let i = 0; i < 7; i++) {
    dateItems.push(add(date, { days: i }));
  }

  const customDateFormat = (day) => {
    if (isEqual(date, day)) return "Today";
    if (isEqual(date, add(day, { days: -1 }))) return "Tomorrow";
    return format(day, "E, d LLL");
  };

  const handleClick = (day) => setSelectedDate(day);

  return (
    <div className="pt-3 position-relative">

      <hr className="mb-3" />

      <Swiper
        slidesPerView={4}
        loop={false}
        spaceBetween={12}
        breakpoints={{
          767: { spaceBetween: 30, slidesPerView: 3 },
        }}
      >
        {dateItems.map((day, index) => (
          <SwiperSlide key={index}>
            <div
              className="text-center"
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(day)}
            >
              {/* DATE TEXT */}
              <div
                className={`${
                  isEqual(day, selectedDate) ? "fw-bold" : "fw-normal"
                } ${window.innerWidth < 768 ? "fs-6" : "fs-5"}`}
              >
                {customDateFormat(day)}
              </div>

              {/* SLOT TEXT */}
              <div
                className={`text-success ${
                  window.innerWidth < 768 ? "small" : "fs-6"
                }`}
              >
                {totalSlots} Slots Available
              </div>

              {/* ACTIVE BLUE BAR */}
              <div
                className={`mx-auto mt-1 ${
                  isEqual(day, selectedDate) ? "bg-primary" : "bg-transparent"
                }`}
                style={{
                  height: window.innerWidth < 768 ? "4px" : "5px",
                  width: window.innerWidth < 768 ? "100%" : "70%",
                }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Gray bottom line */}
      <div
        className="position-absolute bottom-0 start-50 translate-middle-x bg-light"
        style={{
          height: window.innerWidth < 768 ? "4px" : "5px",
          width: window.innerWidth < 768 ? "100%" : "60%",
        }}
      ></div>
    </div>
  );
}
