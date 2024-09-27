// src/app/page.js
"use client";
import Header from "@/components/Header";
import InlineDatePicker from "@/components/InlineDatePicker";
import NthDates from "@/components/NthDates";
import RecurrenceandCustomFrequency from "@/components/RecurrenceandCustomFrequency";
import RecurreneDates from "@/components/RecurreneDates";
import SelectWeekandNthoccurrence from "@/components/SelectWeekandNthoccurrence";
import StartandEndDate from "@/components/StartandEndDate";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8 main">
      <div className="w-full max-w-lg bg-white shadow-lg p-6 rounded-lg">
        <Header />
        <StartandEndDate />

        <RecurrenceandCustomFrequency />
        <SelectWeekandNthoccurrence />

        <InlineDatePicker />
        <RecurreneDates />
        <NthDates />
      </div>
    </div>
  );
}
