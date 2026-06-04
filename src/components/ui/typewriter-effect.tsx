"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function TypewriterEffect({
  words,
  className,
  cursorClassName,
}: {
  words: string[];
  className?: string;
  cursorClassName?: string;
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const type = useCallback(() => {
    const currentWord = words[currentWordIndex];
    if (!isDeleting) {
      setCurrentText(currentWord.substring(0, currentText.length + 1));
      if (currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      setCurrentText(currentWord.substring(0, currentText.length - 1));
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [currentText, currentWordIndex, isDeleting, words]);

  useEffect(() => {
    const timeout = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [type, isDeleting]);

  return (
    <div className={cn("inline-flex items-center", className)}>
      <span className="text-inherit">{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className={cn("inline-block w-[4px] h-[1em] bg-[var(--accent-gold)] ml-1", cursorClassName)}
      />
    </div>
  );
}
