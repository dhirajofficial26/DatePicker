import { useDateContext } from "@/app/store/recurring_dates_store";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const InlineDatePicker = () => {
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
      {/* Inline DatePicker for Visual Recurrence */}
      <div className="mb-6 flex justify-center ">
        <DatePicker
          inline
          selected={startDate}
          onChange={setStartDate}
          dateFormat="yyyy/MM/dd"
          highlightDates={highlightDates()}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default InlineDatePicker;
