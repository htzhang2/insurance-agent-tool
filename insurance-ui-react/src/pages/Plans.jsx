export default function Plans() {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="font-semibold text-lg">Guaranteed Income Plans</h3>
        <p className="mt-2 text-slate-700">
          Designed to provide predictable income you cannot outlive.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="font-semibold text-lg">
          Growth-Oriented Income Plans
        </h3>
        <p className="mt-2 text-slate-700">
          Offer growth potential while helping protect against market losses.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="font-semibold text-lg">
          Legacy-Focused Solutions
        </h3>
        <p className="mt-2 text-slate-700">
          Balance retirement income with leaving assets to beneficiaries.
        </p>
      </div>
    </div>
  );
}
