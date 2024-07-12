import { Card } from "@/components/ui/card";
import { WeatherData } from "@/types/weatherForcastType";

export default function ForcastCard({ forcast }: { forcast: WeatherData[] }) {
  type Group = {
    [key: string]: WeatherData[];
  };

  const groupedPerDay: Group = {};

  const datePerDay = (data: WeatherData[]) => {
    data.forEach(item => {
      const day = new Date(item.dt_txt).toDateString().substring(0, 3);

      //check if there is a key
      if (!groupedPerDay[day]) {
        groupedPerDay[day] = [];
      }
      groupedPerDay[day].push(item);
    });
  };
  datePerDay(forcast);

  // groupByDays(forcast);
  const dateToText = (val: string) => {
    const date = new Date(val);
    const hour = date.toLocaleTimeString([], { hour: "2-digit" });
    return hour;
  };
  return (
    <section className=" h-[300px] w-[350px] mt-2 overflow-y-scroll ">
      {Object.entries(groupedPerDay).map(([key, items], i) => (
        <article key={i} className="w-[345px] pt-5">
          <h1 className="text-center uppercase">{key}.</h1>
          <Card className="grid grid-cols-4 gap-4 p-4 w-full">
            {items.map(({ main, weather, dt_txt }, j) => (
              <div key={j} className="flex flex-col justify-end items-start ">
                <p className="font-light tracking-wider w-full ">
                  {main.feels_like.toFixed(0)}°
                </p>
                <p className="lowercase border-b border-neutral-200 w-full">
                  {weather[0].main}
                </p>
                <p className="text-xs pt-1 w-full font-light">
                  {dateToText(dt_txt)}
                </p>
              </div>
            ))}
          </Card>
        </article>
      ))}
    </section>
  );
}
