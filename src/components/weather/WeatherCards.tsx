import { WeatherResponseType } from "@/types/weatherResponseType";
import CurrentCard from "./cards/CurrentCard";
import ForcastCard from "./cards/ForcastCard";

export default function WeatherCards({
  weather,
}: {
  weather: WeatherResponseType;
}) {
  return (
    <>
      <CurrentCard city={weather.city} current={weather.weather.current} />
      <ForcastCard forcast={weather.weather.forcast} />
    </>
  );
}
