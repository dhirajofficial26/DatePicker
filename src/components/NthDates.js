import { useDateContext } from "@/app/store/recurring_dates_store";
import "react-datepicker/dist/react-datepicker.css";

const NthDates = () => {
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
      {/* nth Weekday Dates List */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          nth Weekday Dates
        </label>

        <div className="max-h-[200px] overflow-y-auto border border-gray-300 rounded-lg p-2">
          <ul className="list-disc list-inside text-gray-700">
            {nthDates.length > 0 && selectedWeekday ? (
              nthDates.map((date, index) => (
                <li key={index} className="text-sm">
                  {date.toDateString()}
                </li>
              ))
            ) : (
              <li className="text-sm">No nth weekday dates available.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NthDates;
