import { getWeahter } from "../actions/actions";
import { Suspense } from "react";
import Loading from "./loading";
import WeatherCards from "@/components/weather/WeatherCards";

async function WeatherData({ city }: { city: string }) {
  const data = await getWeahter(city);

  return (
    <Suspense fallback={<Loading />}>
      <WeatherCards weather={data} />
    </Suspense>
  );
}

export default function Page({ params }: { params: { city: string } }) {
  return <WeatherData city={params.city} />;
}
