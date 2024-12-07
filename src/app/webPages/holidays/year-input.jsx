import React, { useState } from "react";

export default function YearInput({ year, setYear }) {
  // const [year, setYear] = useState("2024");

  function handleChange(event) {
    setYear(event.target.value);

    // console.log(year);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("Final year set:", year);
  }

  return (
    <div>
      <form
        className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
        onSubmit={handleSubmit}
      >
        <div className="mb-2">
          {/* <label>The Year to lookup:</label> */}

          <input
            type="text"
            placeholder="Year"
            required
            className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            value={year}
            // onChange={(e) => setYear(e.target.value)}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Set
          </button>
        </div>
      </form>
    </div>
  );
}
