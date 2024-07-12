import Link from "next/link";
import Search from "../search/Search";

export default function MainNav() {
  return (
    <nav className=" p-5 ">
      <Link href="/">
        <h1 className="text-2xl font-bold">Weather App</h1>{" "}
      </Link>
      <Search />
    </nav>
  );
}
// fixed top-0 left-0 w-screen h-fit p-5 flex flex-col gap-5 justify-center items-centera