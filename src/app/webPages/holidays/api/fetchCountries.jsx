import React from "react";

export default async function fetchCountries() {
  try {
    const response = await fetch(`/api/AvailableCountries`);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}
