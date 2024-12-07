import React from "react";

export default async function fetchCountryInfo(countryCode) {
  // {
  //   "commonName": "Andorra",
  //   "officialName": "Principality of Andorra",
  //   "countryCode": "AD",
  //   "region": "Europe",
  //   "borders": [
  //     {
  //       "commonName": "France",
  //       "officialName": "French Republic",
  //       "countryCode": "FR",
  //       "region": "Europe",
  //       "borders": null
  //     },
  //     {
  //       "commonName": "Spain",
  //       "officialName": "Kingdom of Spain",
  //       "countryCode": "ES",
  //       "region": "Europe",
  //       "borders": null
  //     }
  //   ]
  // }
  try {
    const response = await fetch(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
    );
    const data = await response.json();
    console.log(data);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}
