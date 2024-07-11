
import { CitiesType } from "@/types/cityType";
import { WeatherDataType } from "@/types/weatherType";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("q");
  if (!city) return NextResponse.json({ error: "empty field" });

  try {
    const cityData = await fetch(
      `${process.env.API_URL}/geo/1.0/direct?q=${city}&appid=${process.env.API_TOKEN}`
    );

    if (!cityData.ok) return NextResponse.json({ error: "city not found" });

    const geocode = (await cityData.json()) as CitiesType;

    if (!geocode) return NextResponse.json({ error: "city not found" });

    const lat = geocode[0].lat;
    const lon = geocode[0].lon;

    const weatherData = await fetch(
      `${process.env.API_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_TOKEN}&units=metric`
    );

    if (!weatherData.ok) return NextResponse.json({ error: "city not found" });

    const data = (await weatherData.json()) as WeatherDataType;
    return NextResponse.json({ data, geocode });
  } catch (error) {
    return NextResponse.json(JSON.stringify({ error: `${error}` }));
  }
}
