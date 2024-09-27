import { useDateContext } from "@/app/store/recurring_dates_store";
import "react-datepicker/dist/react-datepicker.css";

const RecurreneDates = () => {
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
    <>
      {/* Recurring Dates List */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Recurring Dates
        </label>

        <div className="max-h-[200px] overflow-y-auto border border-gray-300 rounded-lg p-2">
          <ul className="list-disc list-inside text-gray-700">
            {recurringDates.length > 0 && customFrequency > 0 ? (
              recurringDates.map((date, index) => (
                <li key={index} className="text-sm">
                  {date.toDateString()}
                </li>
              ))
            ) : (
              <li className="text-sm">No recurring dates available.</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RecurreneDates;
