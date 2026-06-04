"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Card3D({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    setRotateX((-mouseY / rect.height) * 20);
    setRotateY((mouseX / rect.width) * 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className={cn("[perspective:1000px]", containerClassName)}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "transition-transform duration-200 ease-out [transform-style:preserve-3d]",
          className
        )}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function CardBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("[transform-style:preserve-3d]", className)}>
      {children}
    </div>
  );
}

export function CardItem({
  children,
  className,
  translateZ = 0,
  as: Component = "div",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  translateZ?: number;
  as?: React.ElementType;
  [key: string]: unknown;
}) {
  return (
    <Component
      className={cn("", className)}
      style={{ transform: `translateZ(${translateZ}px)` }}
      {...rest}
    >
      {children}
    </Component>
  );
}
