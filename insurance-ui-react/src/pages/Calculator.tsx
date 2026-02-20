import { useState } from "react";

interface CalculatorProps {
  gotoAgentPage: () => void;
}

export default function Calculator({gotoAgentPage}: CalculatorProps) {
  const [age, setAge] = useState<string>("");
  const [incomeStart, setIncomeStart] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const analyze = () => {
    if (!age || !incomeStart || !priority) {
      alert("Please answer all questions.");
      return;
    }

    let message = "";

    if (priority === "guarantee") {
      message =
        "You may benefit from income strategies that provide predictable, guaranteed payments to support long-term retirement income.";
    } else if (priority === "growth") {
      message =
        "You may prefer income solutions that offer growth potential with protection against major market downturns.";
    } else {
      message =
        "You may want income options that balance retirement income with preserving value for your family.";
    }

    setResult(message);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold">
          Let’s understand your situation
        </h2>

        <div>
          <label className="block font-medium mb-1">Your age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="e.g. 50"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            When do you want income to start?
          </label>
          <select
            value={incomeStart}
            onChange={(e) => setIncomeStart(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Select</option>
            <option value="5">Within 5 years</option>
            <option value="10">5–10 years</option>
            <option value="20">10+ years</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">
            What matters most to you?
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Select</option>
            <option value="guarantee">Guaranteed income</option>
            <option value="growth">Growth with protection</option>
            <option value="legacy">Leave money to family</option>
          </select>
        </div>

        <button
          onClick={analyze}
          className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700 transition"
        >
          See My Options
        </button>
      </div>

      {result && (
        <div className="mt-6 bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-2">
            Your Possible Fit
          </h3>
          <p>{result}</p>

          <button 
            onClick={gotoAgentPage}
            className="mt-4 w-full border py-3 rounded-lg hover:bg-slate-100">
            Talk to an Agent
          </button>
        </div>
      )}
    </>
  );
}
