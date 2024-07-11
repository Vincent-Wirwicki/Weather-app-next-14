import { CitiesType } from "@/types/cityType";
import { WeatherDataType } from "@/types/weatherType";

export async function getWeahter(q: string) {
  try {
    const geocode = await fetch(
      `${process.env.API_URL}/geo/1.0/direct?q=${q}&appid=${process.env.API_TOKEN}`
    );

    const city = (await geocode.json()) as CitiesType;
    if (!city) throw new Error("city dont exist");
    const lat = city[0].lat;
    const lon = city[0].lon;

    const weatherData = await fetch(
      `${process.env.API_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_TOKEN}&units=metric`
    );
    const weather = (await weatherData.json()) as WeatherDataType;

    const data = {
      city: city[0].name,
      weather: {
        main: weather.weather[0].main,
        temp: {
          curr: weather.main.temp,
          feel: weather.main.feels_like,
        },
      },
    };
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
}

// export async function getWeahter(q: string) {
//   try {
//     const geocode = await fetch(
//       `${process.env.API_URL}/geo/1.0/direct?q=${q}&appid=${process.env.API_TOKEN}`
//     );

//     if (!geocode.ok) throw new Error("Failed to fetch data");
//     const city = (await geocode.json()) as CitiesType;

//     if (!city.length) throw new Error("array is empty");
//     const lat = city[0].lat;
//     const lon = city[0].lon;

//     const weatherData = await fetch(
//       `${process.env.API_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_TOKEN}&units=metric`
//     );

//     if (!weatherData.ok) return NextResponse.json({ error: "city not found" });
//     const weather = (await weatherData.json()) as WeatherDataType;
//     return NextResponse.json({ weather, city });
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }
