import React, { useEffect, useState } from "react";
import HolidayItem from "./holiday-item";
import fetchHolidays from "./api/fetchHolidays";
import fetchCountryInfo from "./api/fetchCountryInfo";

export default function HolodayList({ countryCode, year }) {
  // {
  //   "date": "2024-01-01",
  //   "localName": "Any nou",
  //   "name": "New Year's Day",
  //   "countryCode": "AD",
  //   "fixed": false,
  //   "global": true,
  //   "counties": null,
  //   "launchYear": null,
  //   "types": [
  //     "Public"
  //   ]
  // }
  const [holidays, setHolidays] = useState([]);
  const [hoveredCountryInfo, setHoveredCountryInfo] = useState(null);
  const [error, setError] = useState(null);

  const loadHolidays = async (countryCode, year) => {
    try {
      const response = await fetchHolidays(countryCode, year);
      if (!response || !Array.isArray(response)) {
        throw new Error("Invalid data format");
      }
      setHolidays(response);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    // console.log("Loading holidays for:", countryCode, year);
    loadHolidays(countryCode, year);
  }, [countryCode, year]);

  

  return (
    <div>
      {(holidays || []).map((item) => (
        <HolidayItem
          key={item.date + item.countryCode + item.localName + item.name}
          date={item.date}
          localName={item.localName}
          name={item.name}
          countryCode={item.countryCode}

        />
      ))}


    </div>
  );
}
