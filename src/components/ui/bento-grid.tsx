import { cn } from "@/lib/utils";
import React from "react";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 border border-[var(--border-subtle)] bg-[var(--bg-secondary)] justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="transition duration-200">
        {icon}
        <div className="font-sans font-bold text-[var(--text-primary)] mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-[var(--text-secondary)] text-xs">
          {description}
        </div>
      </div>
    </div>
  );
}
