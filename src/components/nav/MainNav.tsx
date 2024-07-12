import Link from "next/link";
import Search from "../search/Search";

export default function MainNav() {
  return (
    <nav className=" p-5 ">
      <Link href="/" className="text-lg text-neutral-600 font-bold border-b w-fit pb-2">
        <h1>Minimal weather</h1>
      </Link>
      <Search />
    </nav>
  );
}
// fixed top-0 left-0 w-screen h-fit p-5 flex flex-col gap-5 justify-center items-centera