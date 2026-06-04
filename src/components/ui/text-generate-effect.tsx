"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { cn } from "@/lib/utils";

export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) {
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { opacity: 1, filter: filter ? "blur(0px)" : "none" },
        { duration, delay: stagger(0.08) }
      );
    }
  }, [isInView, animate, filter, duration]);

  return (
    <div className={cn("font-bold", className)} ref={ref}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide" ref={scope}>
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className="opacity-0 inline-block mr-[0.3em]"
              style={{ filter: filter ? "blur(10px)" : "none" }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
