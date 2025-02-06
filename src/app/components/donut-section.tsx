"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import gsap from "gsap";

export const DonutSection = () => {
  const [step, setStep] = useState<number>(1);

  const appleContainerRef = useRef(null);
  const caramelContainerRef = useRef(null);
  const bananaContainerRef = useRef(null);
  const strawberryContainerRef = useRef(null);

  const blueBerryTextRef = useRef(null);
  const appleTextRef = useRef(null);
  const caramelTextRef = useRef(null);
  const bananaTextRef = useRef(null);
  const strawberryTextRef = useRef(null);

  const blueBerryRef = useRef(null);
  const appleRef = useRef(null);
  const caramelRef = useRef(null);
  const bananaRef = useRef(null);
  const strawberryRef = useRef(null);

  const timeLine = useRef(gsap.timeline({ paused: true }));

  const handleNext = () => {
    if (step === 1) {
      timeLine.current = gsap
        .timeline()
        .to(blueBerryTextRef.current, { y: 700 }, "a")
        .to(blueBerryRef.current, { y: -520, rotate: 180, scale: 0.4 }, "a")
        .to(appleRef.current, { scale: 1, top: "50%", rotate: 0 }, "a")
        .to(appleContainerRef.current, { scale: 20, duration: 0.8 }, "a")
        .to(appleTextRef.current, { scale: 1, top: "26%" }, "a");
    } else if (step === 2) {
      timeLine.current = gsap
        .timeline()
        .to(appleRef.current, { y: -520, rotate: 180, scale: 0.4 }, "b")
        .to(appleTextRef.current, { y: 700 }, "b")
        .to(caramelRef.current, { scale: 1, top: "50%", rotate: 0 }, "b")
        .to(caramelContainerRef.current, { scale: 20, duration: 0.8 }, "b")
        .to(caramelTextRef.current, { scale: 1, top: "26%" }, "b");
    } else if (step === 3) {
      timeLine.current = gsap
        .timeline()
        .to(caramelRef.current, { y: -520, rotate: 180, scale: 0.4 }, "c")
        .to(caramelTextRef.current, { y: 700 }, "c")
        .to(bananaRef.current, { scale: 1, top: "50%", rotate: 0 }, "c")
        .to(bananaContainerRef.current, { scale: 20, duration: 0.8 }, "c")
        .to(bananaTextRef.current, { scale: 1, top: "26%" }, "c");
    } else {
      timeLine.current = gsap
        .timeline()
        .to(bananaRef.current, { y: -520, rotate: 180, scale: 0.4 }, "d")
        .to(bananaTextRef.current, { y: 700 }, "d")
        .to(strawberryRef.current, { scale: 1, top: "50%", rotate: 0 }, "d")
        .to(strawberryContainerRef.current, { scale: 20, duration: 0.8 }, "d")
        .to(strawberryTextRef.current, { scale: 1, top: "26%" }, "d");
    }
  };

  return (
    <div className="h-screen bg-gradient-radial from-[#e0b8ff] to-[#744eb2] flex justify-center items-center overflow-hidden">
      <div className="w-full h-full relative">
        <div
          ref={appleContainerRef}
          className="absolute -top-24 size-40 scale-0 left-1/2 -translate-x-1/2 bg-gradient-radial from-[#E0FFB8] to-[#7AB24E]"
        />
        <div
          ref={caramelContainerRef}
          className="absolute -top-24 size-40 scale-0 left-1/2 -translate-x-1/2 bg-gradient-radial from-[#FFE3B8] to-[#D68042]"
        />
        <div
          ref={bananaContainerRef}
          className="absolute -top-24 size-40 scale-0 left-1/2 -translate-x-1/2 bg-gradient-radial from-[#fffacd] to-[##ffff00]"
        />
        <div
          ref={strawberryContainerRef}
          className="absolute -top-24 size-40 scale-0 left-1/2 -translate-x-1/2 bg-gradient-radial from-[#ffe4e1] to-[#c32148]"
        />
        <h3
          ref={blueBerryTextRef}
          className="text-style top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        >
          blue berry
        </h3>
        <h3
          ref={appleTextRef}
          className="text-style left-1/2 -translate-x-1/2 scale-0 -top-14"
        >
          green apple
        </h3>
        <h3
          ref={caramelTextRef}
          className="text-style left-1/2 -translate-x-1/2 scale-0 -top-64"
        >
          caramel
        </h3>
        <h3
          ref={bananaTextRef}
          className="text-style left-1/2 -translate-x-1/2 scale-0 -top-64"
        >
          banana
        </h3>
        <h3
          ref={strawberryTextRef}
          className="text-style left-1/2 -translate-x-1/2 scale-0 -top-64"
        >
          strawberry
        </h3>
        <Image
          ref={blueBerryRef}
          width={800}
          height={800}
          alt="Blue berry donut"
          src={"/blueberry.png"}
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        />
        <Image
          ref={appleRef}
          width={800}
          height={800}
          alt="Apple donut"
          src={"/green-apple.png"}
          className="absolute top-[104%] -translate-y-1/2 left-1/2 -translate-x-1/2 size-[45vw] scale-[0.4] rotate-180"
        />
        <Image
          ref={caramelRef}
          width={800}
          height={800}
          alt="Caramel donut"
          src={"/caramel.png"}
          className="absolute top-[120%] -translate-y-1/2 left-1/2 -translate-x-1/2 size-[45vw] scale-[0.4] rotate-180"
        />
        <Image
          ref={bananaRef}
          width={800}
          height={800}
          alt="Banana donut"
          src={"/banana.png"}
          className="absolute top-[120%] -translate-y-1/2 left-1/2 -translate-x-1/2 size-[45vw] scale-[0.4] rotate-180"
        />
        <Image
          ref={strawberryRef}
          width={800}
          height={800}
          alt="Strawberry donut"
          src={"/strawberry.png"}
          className="absolute top-[120%] -translate-y-1/2 left-1/2 -translate-x-1/2 size-[45vw] scale-[0.4] rotate-180"
        />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full flex justify-end px-4">
          <ChevronRight
            className="size-36 text-white cursor-pointer"
            onClick={() => {
              handleNext();
              setStep((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};
