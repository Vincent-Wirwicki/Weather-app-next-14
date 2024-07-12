import { CitiesType } from "@/types/cityType";
import { WeatherCurrent } from "@/types/weatherCurrentType";
import { WeatherForecast } from "@/types/weatherForcastType";

export async function getWeahter(q: string) {
  try {
    const geocode = await fetch(
      `${process.env.API_URL}/geo/1.0/direct?q=${q}&appid=${process.env.API_TOKEN}`
    );

    const city = (await geocode.json()) as CitiesType;
    const lat = city[0].lat;
    const lon = city[0].lon;

    if (!lat || !lon) throw new Error("city not found");

    const dataCurrent = await fetch(
      `${process.env.API_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_TOKEN}&units=metric`
    );
    const dataForecast = await fetch(
      `${process.env.API_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_TOKEN}&units=metric`
    );

    const current = (await dataCurrent.json()) as WeatherCurrent;
    const forcast = (await dataForecast.json()) as WeatherForecast;

    const data = {
      city: city[0].name,
      weather: {
        current: {
          main: current.weather[0].main,
          temp: current.main.temp,
        },
        forcast: forcast.list,
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
