import React from "react";

export default function HolidayItem({ date, localName, name, countryCode }) {
  return (
    <li className="p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-500 cursor-pointer mb-2 w-96">
      <span className="font-bold text-xl">
        {countryCode} {name}
      </span>
      <p className="text-sm">
        Local Name: {localName} Date: {date}
      </p>
    </li>
  );
}
