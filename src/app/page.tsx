"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const textElements = textRef.current?.querySelectorAll(".text-reveal");
    if (textElements) {
      gsap.fromTo(
        textElements,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".fade-in",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".fade-in",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  }, []);
  const projectsRef = useRef<HTMLElement | null>(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: projectsRef.current,
          offsetY: 100,
        },
        ease: "power2.inOut",
      });
    }
  };

  const projectData = [
    {
      title: "3D Donut Animation",
      image: "/banana.png",
      description:
        "A fun and interactive 3D donut animation showcasing GSAP's power in combining 3D effects and React. Explore how I used GSAP to bring a donut to life!",
      link: "/donuts",
    },
    {
      title: "Cards Scroll Animation",
      image: "/mountain.png",
      description:
        "Smooth animation of cards that appear when navigating to this page.",
      link: "/cards",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <section className="fade-in h-screen flex flex-col gap-4 items-center justify-center text-center">
        <h1 className=" text-5xl font-bold leading-tight max-w-3xl">
          Welcome to My GSAP Animation Portfolio
        </h1>
        <p className="text-3xl" ref={textRef}>
          {"Discover my creative projects powered by GSAP and React!"
            .split(" ")
            .map((word, index) => (
              <span key={index} className="text-reveal inline-block">
                {word}{" "}
              </span>
            ))}
        </p>
        <button
          onClick={scrollToProjects}
          className="px-6 py-3 bg-slate-300 text-black rounded-full border-2 border-transparent hover:border-purple-500 transition-all duration-300"
        >
          Explore Projects
        </button>
      </section>
      <section
        ref={projectsRef}
        id="projects"
        className="min-h-screen py-16 px-4 bg-black"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="hover:border-purple-500 border-2 border-transparent bg-gradient-to-r from-green-400 to-blue-500  relative h-100 overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[100%] object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white flex items-center gap-2 justify-center text-center p-4 opacity-0 hover:opacity-100 transition-all duration-300">
                <div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="pb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="px-6 py-3 bg-slate-300 text-black rounded-full border-2 border-transparent hover:border-purple-500 transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
