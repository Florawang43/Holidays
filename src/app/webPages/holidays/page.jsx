"use client";
import { useRouter } from "next/compat/router";
import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import HolodayList from "./holiday-list";
import fetchCountries from "./api/fetchCountries";
import YearInput from "./year-input";

// https://openlibrary.org/developers/api

const Page = () => {
  const { user, loading } = useUserAuth();
  const router = useRouter();
  const [SelectedCountry, setSelectedCountry] = useState({
    countryCode: "",
    name: "",
  });
  const [year, setYear] = useState(2024);

  function handleYearChange(newYear) {
    setYear(newYear);
    // console.log("Year updated to:", newYear);
  }

  const [countries, setCountries] = useState([]);

  const loadCountries = async () => {
    const fetchedCountries = await fetchCountries();
    setCountries(fetchedCountries || []);
  };

  useEffect(() => {
    loadCountries();
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/pages"); // Redirect to landing if not logged in
    }
  }, [user, loading, router]);

  if (loading || !user)
    return (
      <div className="flex justify-center items-center bg-black h-screen">
        <div className="w-12 h-12 border-4 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );

  // const handleAddItem = (newItem) => {
  //   setItems([...items, newItem]);
  // };

  // const handleItemSelect = (item) => {
  //   const cleanedName = item.name
  //     .split(",")[0]
  //     .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "")
  //     .trim();
  //   setSelectedItemName(cleanedName);
  // };

  //   {
  //     "start": 0,
  //     "num_found": 629,
  //     "docs": [
  //         {...},
  //         {...},
  //         ...
  //         {...}]
  // }

  // {
  //     "cover_i": 258027,
  //     "has_fulltext": true,
  //     "edition_count": 120,
  //     "title": "The Lord of the Rings",
  //     "author_name": [
  //         "J. R. R. Tolkien"
  //     ],
  //     "first_publish_year": 1954,
  //     "key": "OL27448W",
  //     "ia": [
  //         "returnofking00tolk_1",
  //         "lordofrings00tolk_1",
  //         "lordofrings00tolk_0",
  //     ],
  //     "author_key": [
  //         "OL26320A"
  //     ],
  //     "public_scan_b": true
  // }
  const handleItemSelect = (item) => {
    setSelectedCountry(item);
  };
  return (
    <main className="p-4 bg-gray-900 ">
      <h1 className="text-3xl font-bold text-white mb-4">Country List</h1>
      <div className="flex">
        <YearInput year={year} setYear={handleYearChange} />
      </div>
      <div></div>
      <div className="flex">
        <div>
          {/* <NewItem onAddItem={handleAddItem} /> */}
          <ItemList items={countries} onItemSelect={handleItemSelect} />
        </div>

        <div className="ml-4 mt-6">
          <h1 className="text-3xl font-bold text-white">
            Holiday of {SelectedCountry.name} in {year}
          </h1>
          {SelectedCountry.countryCode ? (
            <HolodayList
              countryCode={SelectedCountry.countryCode}
              year={year}
            />
          ) : (
            <h2 className="text-xl text-white">
              Select a Country for holodays details.
            </h2>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
