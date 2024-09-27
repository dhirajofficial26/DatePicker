import { useDateContext } from "@/app/store/recurring_dates_store";
import "react-datepicker/dist/react-datepicker.css";

const SelectWeekandNthoccurrence = () => {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    recurrencePattern,
    setRecurrencePattern,
    customFrequency,
    setCustomFrequency,
    recurringDates,
    nthDates,
    selectedWeekday,
    setSelectedWeekday,
    nthOccurrence,
    setNthOccurrence,
    highlightDates,
    handleWeekdayChange,
  } = useDateContext();

  return (
    <div>
      {" "}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Day of the Week
        </label>
        <select
          value={selectedWeekday}
          onChange={(e) => {
            setSelectedWeekday(e.target.value);
            handleWeekdayChange(e.target.value);
            setCustomFrequency(0);
            setNthOccurrence(1);
            setRecurrencePattern("");
          }}
          className="block w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="">-- Select a Day --</option>
          {[
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ].map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nth Occurrence
        </label>
        <input
          type="number"
          value={nthOccurrence}
          onChange={(e) => setNthOccurrence(Number(e.target.value))}
          className="block w-full p-2 border border-gray-300 rounded-lg"
          placeholder="1"
          min="1"
        />
      </div>
    </div>
  );
};

export default SelectWeekandNthoccurrence;
