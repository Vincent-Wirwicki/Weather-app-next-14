import { WeatherData } from "./weatherForcastType";

export type WeatherResponseType = {
  city: string;
  weather: {
    current: {
      main: string;
      temp: number;
    };
    forcast: WeatherData[];
  };
};
