import React, { useEffect, useState } from "react";
import Item from "./item";
import fetchCountryInfo from "./api/fetchCountryInfo";

export default function ItemList({ items, onItemSelect }) {
  return (
    <div>
      {(items || []).map((item) => (
        <Item
          key={item.countryCode}
          countryCode={item.countryCode}
          name={item.name}
          onSelect={() => onItemSelect(item)}
        />
      ))}
    </div>
  );
}
