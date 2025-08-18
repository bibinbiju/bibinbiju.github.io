"use client";
import { useEffect, useRef } from "react";
import { MotionDiv,useInView,useAnimation } from "./motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({ children, delay = 0, duration = 0.8 }: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <MotionDiv
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: duration,
            delay: delay,
            ease: "easeOut"
          }
        }
      }}
    >
      {children}
    </MotionDiv>
  );
}
