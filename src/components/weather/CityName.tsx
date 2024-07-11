"use client";
import { CitiesType } from "@/types/cityType";
import { useEffect, useState } from "react";

export default function CityName({ city }: { city: CitiesType }) {
  const [name, setName] = useState("");
  useEffect(() => {
    if (!city) {
      setName("city not found");
    } else {
      setName(city[0].name);
    }
  }, [city]);

  return <p>{name}</p>;
}
