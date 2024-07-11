import { getWeahter } from "../actions/actions";
import WeatherCard from "@/components/weather/WeatherCard";
import { Suspense } from "react";
import Loading from "./loading";

async function WeatherData({ city }: { city: string }) {
  const data = await getWeahter(city);

  return (
    <Suspense fallback={<Loading />}>
      <WeatherCard data={data} />
    </Suspense>
  );
}

export default function Page({ params }: { params: { city: string } }) {
  return <WeatherData city={params.city} />;
}
