"use client";
import { useEffect, useRef, useState } from "react";
import {  useInView } from "framer-motion";
import { MotionDiv } from "./motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

export default function SkillBar({ name, percentage, delay = 0 }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animateWidth, setAnimateWidth] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimateWidth(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span>{name}</span>
        <span className="text-accent">{percentage}%</span>
      </div>
      <div className="bg-muted rounded-full h-3 overflow-hidden">
        <MotionDiv
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: animateWidth ? `${percentage}%` : 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
