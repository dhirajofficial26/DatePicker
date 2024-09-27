// src/components/RecurrenceandCustomFrequency.js
import { useDateContext } from "@/app/store/recurring_dates_store";
import { useRef } from "react";

const RecurrenceandCustomFrequency = () => {
  const {
    recurrencePattern,
    setRecurrencePattern,
    customFrequency,
    setCustomFrequency,
    setSelectedWeekday,
  } = useDateContext();

  const inputRef = useRef(null);

  const handleCustomFrequencyChange = () => {
    const value = inputRef.current.value.trim();
    setCustomFrequency(!value || isNaN(value) ? null : Number(value));
    setSelectedWeekday("");
  };

  return (
    <div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Recurrence Pattern
        </label>
        <select
          value={recurrencePattern}
          onChange={(e) => setRecurrencePattern(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="">-- Select a Pattern --</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Custom Frequency
        </label>
        <input
          type="number"
          value={customFrequency}
          ref={inputRef}
          onChange={handleCustomFrequencyChange}
          className="block w-full p-2 border border-gray-300 rounded-lg"
          placeholder="0"
        />
      </div>
    </div>
  );
};
export default RecurrenceandCustomFrequency;
