"use client";
import { useEffect, useState } from "react";
import {  MotionDiv } from "./motion";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle';
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const newElements: FloatingElement[] = [];
    for (let i = 0; i < 15; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 40 + 20,
        duration: Math.random() * 10 + 10,
        color: ['primary', 'secondary', 'accent'][Math.floor(Math.random() * 3)],
        shape: (['circle', 'square', 'triangle'] as Array<'circle' | 'square' | 'triangle'>)[Math.floor(Math.random() * 3)]
      });
    }
    setElements(newElements);
  }, []);

  const getShapeClasses = (shape: string, color: string) => {
    const baseClasses = "absolute opacity-10 pointer-events-none";
    const colorClasses = {
      primary: "bg-primary/20",
      secondary: "bg-secondary/20", 
      accent: "bg-accent/20"
    };

    switch (shape) {
      case 'circle':
        return `${baseClasses} ${colorClasses[color as keyof typeof colorClasses]} rounded-full blur-sm`;
      case 'square':
        return `${baseClasses} ${colorClasses[color as keyof typeof colorClasses]} rounded-lg rotate-45 blur-sm`;
      case 'triangle':
        return `${baseClasses} ${colorClasses[color as keyof typeof colorClasses]} clip-path-triangle blur-sm`;
      default:
        return `${baseClasses} ${colorClasses[color as keyof typeof colorClasses]} rounded-full blur-sm`;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((element) => (
        <MotionDiv
          key={element.id}
          className={getShapeClasses(element.shape, element.color)}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
}