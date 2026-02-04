import { useState } from "react";

export default function App() {
  const [age, setAge] = useState("");
  const [incomeStart, setIncomeStart] = useState("");
  const [priority, setPriority] = useState("");
  const [result, setResult] = useState("");

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
    } else if (priority === "legacy") {
      message =
        "You may want income options that balance retirement income with preserving value for your family.";
    }

    setResult(message);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-slate-800 text-white py-8 text-center">
        <h1 className="text-3xl font-semibold">Future Income Planner</h1>
        <p className="mt-2 text-slate-200">
          Helping you prepare reliable income for the years ahead
        </p>
      </header>

      {/* Main */}
      <main className="flex-1 max-w-xl mx-auto p-6 w-full">
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
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-slate-300"
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
            className="w-full bg-slate-800 text-white py-3 rounded-lg font-medium hover:bg-slate-700 transition"
          >
            See My Options
          </button>
        </div>

        {result && (
          <div className="mt-6 bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-2">
              Your Possible Fit
            </h3>
            <p className="text-slate-700">{result}</p>

            <button className="mt-4 w-full border border-slate-400 py-3 rounded-lg hover:bg-slate-100 transition">
              Talk to an Agent
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-slate-500 py-4">
        Licensed Insurance Professional • Educational Use Only
      </footer>
    </div>
  );
}
