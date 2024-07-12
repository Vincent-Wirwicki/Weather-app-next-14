// import { Separator } from "@radix-ui/react-separator";
// import { Card } from "../ui/card";
// import { WeatherCurrent } from "@/types/weatherCurrentType";
// import { WeatherForecast } from "@/types/weatherForcastType";

// export default function WeatherCard({
//   weather,
// }: {
//   weather: {
//     current: WeatherCurrent;
//     forcast: WeatherForecast;
//   };
// }) {
//   const {current, forcast} = weather
  
//   return (
//     <Card className="w-[300px] h-full p-5 mt-16 flex flex-col justify-center items-center">
//       <p className="text-2xl uppercase font-light tracking-wider">
//         {data?.city.name || "not found"}
//       </p>
//       <Separator
//         orientation="horizontal"
//         className="w-3/4 h-[1px] bg-neutral-200 my-5"
//       ></Separator>
//       <p className="text-6xl font-bold py-5">
//         {data?.weather.temp.curr.toFixed(0) || "0"}°
//       </p>
//       <p className="text-2xl font-bold uppercase tracking-wider">
//         {data?.weather.main || "not found"}
//       </p>
//       <Separator
//         orientation="horizontal"
//         className="w-3/4 h-[1px] bg-neutral-200 my-5"
//       ></Separator>
//     </Card>
//   );
// }
