import { useState } from "react";
import DatePicker from "react-datepicker";

export default function AgentInfo() {
  const [selectedDate, setSelectedDate] = useState(null);

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
      <DatePicker
        inline
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={new Date()}
      />
    </div>
  );
}
