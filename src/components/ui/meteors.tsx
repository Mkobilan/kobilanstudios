"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function Meteors({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) {
  const meteors = Array.from({ length: number }, (_, i) => i);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className={cn(
            "animate-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[var(--accent-gold)] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: `${Math.floor(Math.random() * 100)}%`,
            animationDelay: `${Math.random() * 1}s`,
            animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`,
          }}
        />
      ))}
    </>
  );
}
