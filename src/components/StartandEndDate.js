import { useDateContext } from "@/app/store/recurring_dates_store";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiSolidRightArrowCircle } from "react-icons/bi";
const StartandEndDate = () => {
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
    <div className="mb-6 flex gap-11 relative">
      <div className="mb-6 ">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Start Date
        </label>
        <DatePicker
          selected={startDate}
          onChange={setStartDate}
          minDate={new Date()}
          dateFormat="yyyy/MM/dd"
          placeholderText="StartDate"
          className="block w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className=" text-2xl h-1 absolute  ml-[222px] mt-9">
        <BiSolidRightArrowCircle />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          End Date
        </label>
        <DatePicker
          selected={endDate}
          onChange={setEndDate}
          minDate={startDate}
          dateFormat="yyyy/MM/dd"
          className="block w-full p-2 border border-gray-300 rounded-lg"
          disabled={!startDate}
          placeholderText="endDate"
        />
      </div>
    </div>
  );
};

export default StartandEndDate;
