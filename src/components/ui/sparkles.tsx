"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Sparkle {
  id: string;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

function generateSparkle(colors: string[]): Sparkle {
  return {
    id: Math.random().toString(36).substring(7),
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 1,
    color: colors[Math.floor(Math.random() * colors.length)],
  };
}

export function SparklesCore({
  className,
  particleCount = 50,
  colors = ["#B8860B", "#F5DEB3", "#8B0000"],
  speed = 1,
}: {
  className?: string;
  particleCount?: number;
  colors?: string[];
  speed?: number;
}) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: particleCount }, () =>
      generateSparkle(colors)
    );
    setSparkles(newSparkles);
  }, [particleCount, colors.join(",")]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: sparkle.color,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration / speed}s`,
            boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}`,
          }}
        />
      ))}
    </div>
  );
}
