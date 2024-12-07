import React from "react";

export default async function fetchHolidays(countryCode, year) {
  try {
    const response = await fetch(`/api/PublicHolidays/${year}/${countryCode}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error fetching books:", error);
    return [];
  }
}
