"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export const CardsSection = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    if (animationTrigger) {
      gsap.from(cardsRef.current, {
        opacity: 0,
        x: -100,
        rotation: -180,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    }
  }, [animationTrigger]);

  useEffect(() => {
    setAnimationTrigger(false);
    setTimeout(() => {
      setAnimationTrigger(true);
    }, 100);
  }, []);

  const handleMouseEnter = (index: number) => {
    gsap.to(cardsRef.current[index], {
      rotationY: 180,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index: number) => {
    gsap.to(cardsRef.current[index], {
      rotationY: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <div className="w-full h-full bg-black flex flex-col items-center gap-4 overflow-hidden">
      <div className="grid place-items-center">
        <div className="flex gap-2 p-2">
          {[
            "deer.png",
            "sunset.png",
            "mountain.png",
            "morning.png",
            "field.png",
          ].map((src, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="rounded-lg shadow-lg card h-[50vh] cursor-pointer overflow-hidden"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Image
                src={`/${src}`}
                alt="image"
                width={500}
                height={500}
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
