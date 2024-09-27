"use client";

// src/DateContext.js
import { createContext, useContext, useEffect, useState } from "react";

const DateContext = createContext();

export const useDateContext = () => {
  return useContext(DateContext);
};

export const DateProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [recurrencePattern, setRecurrencePattern] = useState("");
  const [customFrequency, setCustomFrequency] = useState(null);
  const [recurringDates, setRecurringDates] = useState([]);
  const [nthDates, setNthDates] = useState([]);
  const [selectedWeekday, setSelectedWeekday] = useState("");
  const [nthOccurrence, setNthOccurrence] = useState(1);

  useEffect(() => {
    generateRecurringDates();
  }, [startDate, endDate, recurrencePattern, customFrequency]);

  useEffect(() => {
    generateNthWeekdayDates();
  }, [startDate, endDate, selectedWeekday, nthOccurrence]);

  const generateRecurringDates = () => {
    if (!startDate || !endDate || customFrequency <= 0) return;

    const dates = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      switch (recurrencePattern) {
        case "daily":
          currentDate.setDate(currentDate.getDate() + customFrequency);
          break;
        case "weekly":
          currentDate.setDate(currentDate.getDate() + customFrequency * 7);
          break;
        case "monthly":
          currentDate.setMonth(currentDate.getMonth() + customFrequency);
          break;
        case "yearly":
          currentDate.setFullYear(currentDate.getFullYear() + customFrequency);
          break;
        default:
          break;
      }
    }
    setRecurringDates(dates);
  };

  const generateNthWeekdayDates = () => {
    if (!startDate || !endDate || !selectedWeekday || nthOccurrence <= 0)
      return;

    const dates = [];
    const currentDate = new Date(startDate);
    const dayMap = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };

    const targetDay = dayMap[selectedWeekday];

    while (currentDate <= endDate) {
      currentDate.setDate(1);
      let occurrenceCount = 0;
      while (
        currentDate.getMonth() === endDate.getMonth() ||
        currentDate.getFullYear() < endDate.getFullYear()
      ) {
        if (currentDate.getDay() === targetDay) {
          occurrenceCount++;
          if (occurrenceCount === nthOccurrence) {
            dates.push(new Date(currentDate));
            break;
          }
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    setNthDates(dates);
  };

  const highlightDates = () => {
    const datesToHighlight = [];
    if (recurrencePattern) {
      datesToHighlight.push(...recurringDates);
    }
    if (selectedWeekday) {
      datesToHighlight.push(...nthDates);
    }
    return datesToHighlight.map((date) => new Date(date));
  };

  // Handlers for changing frequency and weekday
  const handleWeekdayChange = (day) => {
    setSelectedWeekday(day);
    setCustomFrequency(0); // Reset custom frequency when a day is selected
    setNthOccurrence(1); // Reset nth occurrence
    setRecurrencePattern("");
  };

  const handleCustomFrequencyChange = () => {
    const value = inputRef.current.value.trim();

    // If the value is not a number or empty, set it to null
    if (!value || isNaN(value)) {
      setCustomFrequency(null);
    } else {
      // Convert to a number and set the custom frequency
      const frequency = Number(value);
      setCustomFrequency(frequency);
    }

    setSelectedWeekday("");
  };
  return (
    <DateContext.Provider
      value={{
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
        handleCustomFrequencyChange,
        handleWeekdayChange,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};
