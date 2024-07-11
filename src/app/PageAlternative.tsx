"use client";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

// Some basic implemantion to fetch from client to api

export default function Home() {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("Paris");
  const [data, setData] = useState();

  useEffect(() => {
    const getWeather = async (q: string) => {
      const res = await fetch(`/api/?q=${q}`);
      const data = await res.json();
      setData(data);
    };
    getWeather(city);
  }, [city]);

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Weather APP</h1>
      <label className="text-neutral-50">Search a city</label>
      <Input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-red-200"
        onClick={() => setCity(input)}
      >
        submit
      </button>
      {/* do something with data */}
    </main>
  );
}
