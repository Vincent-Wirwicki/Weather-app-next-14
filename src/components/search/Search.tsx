"use client";
import { ChangeEvent, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Search() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleError = () => {
    if (!input) setError(true);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (error) setError(false);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-2 items-center">
        <Input
          id="seartch-city"
          type="text"
          placeholder="search a city"
          value={input}
          onChange={onChange}
        />
        <Link href={`/${input.toLocaleLowerCase()}`} onClick={handleError}>
          <Button variant="outline"> Search </Button>
        </Link>
      </div>
      {error && <p className="text-xs text-red-500">empty input</p>}
    </div>
  );
}
