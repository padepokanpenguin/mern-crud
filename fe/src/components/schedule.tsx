import { useState } from "react";
import Modal from "./modal";

export function Schedule() {
  const monthIndex = new Date().getMonth();
  const daysInMonth = new Date(2024, monthIndex + 1, 0).getDate(); // February 2024 (28 days)
  const firstDayOfMonth = new Date(2024, monthIndex, 1).getDay(); // Day of the week for the 1st
  const month = new Date().toLocaleString('default', { month: 'long' })
  const calendar = Array.from({ length: 6 }, () => Array(7).fill(null));

  let day = 1;
  for (let week = 0; week < 6; week++) {
    for (let weekday = 0; weekday < 7; weekday++) {
      if (week === 0 && weekday < firstDayOfMonth) {
        calendar[week][weekday] = null; // Empty slots before the first day
      } else if (day > daysInMonth) {
        calendar[week][weekday] = null; // Empty slots after the last day
      } else {
        calendar[week][weekday] = day++;
      }
    }
  }

  return (
    <div className="container">
      <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center"> {month} 2024</h1>
        <div className="grid grid-cols-7 gap-4 text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
            <div key={index} className="font-semibold text-gray-700">{day}</div>
          ))}
          {calendar.map((week, weekIndex) => (
            week.map((day, dayIndex) => (
              <div key={`${weekIndex}-${dayIndex}`} className={`border border-gray-200 p-4 ${day ? 'bg-white' : 'bg-gray-100'}`}>
                {day ? (
                  <div className="text-lg font-medium text-gray-800">{day}</div>
                ) : (
                  <div className="text-transparent">-</div> // Optional: You can use an empty div for visual alignment
                )}
              </div>
            ))
          ))}
        </div>
      </div>
    </div>
  )
}


export default function ScheduleComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex w-full justify-end my-2">
        <button onClick={() => setIsOpen(true)} className="bg-gray-700 text-white py-2 px-5 rounded-md hover:bg-gray-500 transition">Add Agenda</button>
      </div>
      <Schedule />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}