import { Card } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";

export default function CurrentCard({
  city,
  current,
}: {
  city: string;
  current: { main: string; temp: number };
}) {
  return (
    <Card className="w-[300px] h-full p-5 flex flex-col justify-center items-center">
      <p className="text-2xl uppercase font-light tracking-wider">
        {city || "not found"}
      </p>
      <Separator
        orientation="horizontal"
        className="w-3/4 h-[1px] bg-neutral-200 my-5"
      ></Separator>
      <p className="text-6xl font-bold py-5">
        {current?.temp.toFixed(0) || "0"}°
      </p>
      <p className="text-2xl font-bold uppercase tracking-wider">
        {current?.main || "not found"}
      </p>
      <Separator
        orientation="horizontal"
        className="w-3/4 h-[1px] bg-neutral-200 my-5"
      ></Separator>
    </Card>
  );
}
