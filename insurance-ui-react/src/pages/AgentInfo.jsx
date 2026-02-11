import { useState } from "react";
import DatePicker from "react-datepicker";

export default function AgentInfo() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [booked, setBooked] = useState(false);

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // reset time
    setBooked(false);
    console.log("Selected date:" + date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time); // reset time
    setBooked(false);
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  const canBook =
    selectedDate &&
    selectedTime &&
    name.trim() !== "" &&
    isValidEmail(email);

  const handleConfirm = () => {
    setBooked(true);

    // TODO: send backend
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-semibold">Michelle Sue - Your Licensed Agent</h2>

      <p>
        I help individuals and families prepare for retirement income using
        insurance-based solutions focused on stability and long-term planning.
      </p>

      <p className="text-sm text-slate-600">
        License #: XXXXXXXX <br />
        States: WA, CA <br />
        Educational use only. No guarantees or investment advice.
      </p>

      <br />
      <h4 className="mb-3 font-semibold">
        Book a time to chat with agent
      </h4>

      <DatePicker
        inline
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
      />

      {selectedDate && (
      <div className="mt-6">
        <h4 className="font-semibold mb-3">
          Available times on{" "}
          {selectedDate.toLocaleDateString()}
        </h4>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={()=>handleTimeChange(time)}
              className={`
                border rounded py-2 text-sm
                ${
                  selectedTime === time
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-gray-100"
                }
              `}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      )}

      {selectedDate && selectedTime && (
        <div className="mt-4 text-green-700">
          ✔ You selected{" "}
          <strong>
            {selectedDate.toLocaleDateString()} at {selectedTime}
          </strong>
        </div>
      )}

      {selectedDate && selectedTime && (
        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />

          {email && !isValidEmail(email) && (
            <p className="text-sm text-red-500 mt-1">
              Please enter a valid email address
            </p>
          )}
        </div>
      )}

      {canBook  && (
        <button
          onClick={handleConfirm}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded"
        >
          Book Appointment
        </button>
      )}

      {booked && (
        <div className="mt-6 bg-green-50 p-4 rounded">
          <strong>{name} Booked:</strong><br />
          {selectedDate.toLocaleDateString()} at {selectedTime}
        </div>
      )}

    </div>
  );
}
