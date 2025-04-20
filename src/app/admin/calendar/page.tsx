'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function AdminCalendar() {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const onChange = (newDate: Date) => {
    setDate(newDate);
    // In a real app, you would fetch appointments for the selected date
    setAppointments(["Appointment 1", "Appointment 2", "Appointment 3"]);
  };
  return (
    <div className="container mx-auto py-8 flex">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-4">Calendar View</h1>
        <Calendar onChange={onChange} value={date} />
      </div>
      <div className="w-1/2 ml-4">
        <h2 className="text-xl font-semibold mb-2">Appointments</h2>
        {appointments.length === 0 ? (
          <p>No appointments scheduled for this date.</p>
        ) : (
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index} className="mb-1">
                {appointment}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

