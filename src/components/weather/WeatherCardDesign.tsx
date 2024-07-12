import { Separator } from "@radix-ui/react-separator";
import { Card } from "../ui/card";

export default function WeatherCardDesign() {
  return (
    <>
      <div className="w-[300px] h-full p-5 flex flex-col justify-between ">
        <Card className="w-[300px] p-5  flex flex-col justify-center items-center">
          loading
        </Card>
        {/* <Card className="p-5">
          <p>A minimalistic weather app</p>
          <p>made with next 14.</p>
        </Card> */}
      </div>
    </>
  );
}

