import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/nav/MainNav";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weath App with Next SSR",
  description: "A simple weather app using next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col w-screen items-center p-24">
          <section className="w-[350px] flex flex-col items-center">
            {" "}
            <MainNav />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
// flex min-h-screen flex-col items-center p-24
