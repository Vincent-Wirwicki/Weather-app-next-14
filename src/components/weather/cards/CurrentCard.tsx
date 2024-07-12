import { Card } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";

export default function CurrentCard({
  city,
  current,
}: {
  city: string;
  current: { main: string; temp: number };
}) {
  const display = () => new Date();
  return (
    <Card className="w-[300px] h-fit p-5 flex justify-center items-center  shadow-md shadow-neutral-900">
      <div>
        <p className="text-xl uppercase font-light tracking-wider">
          {city || "not found"}
        </p>
        <div className="flex gap-2 items-end">
          <p className="text-2xl font-bold ">
            {current?.temp.toFixed(0) || "0"}°
          </p>
          <p className="text-2xl font-bold uppercase tracking-widest">
            {current.main || "not found"}
          </p>
        </div>
      </div>
    </Card>
  );
}
