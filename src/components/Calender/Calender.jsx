import DaySelector from "./DaySelector/DaySelector";
import { useState } from "react";
import { startOfDay } from "date-fns";
import TimeSlotPicker from "./TimeSelector/TimeSelector";

export default function Calendar({ availableSlots, details, handleBooking }) {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  const totalSlots =
    availableSlots.morning.length +
    availableSlots.afternoon.length +
    availableSlots.evening.length;

  return (
    <div className="p-3">
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />

      <TimeSlotPicker
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </div>
  );
}
