"use client"; // Error components must be Client Components

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
    // Log the error to an error reporting service  Cannot read properties of undefined (reading 'lat')
  }, [error]);

  return (
    <Card className="w-[300px] h-[288px] p-5 flex flex-col justify-center items-center">
      <p>Something went wrong</p>
      <p>Try a new research</p>
      <Link href="/" className="underline">
        Go back home
      </Link>
    </Card>
  );
}
