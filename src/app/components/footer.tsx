"use client";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white p-4 border-t border-gray-700 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm text-white flex items-center">
          &copy; {new Date().getFullYear()} Olena Savytska. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/elena-savitskaya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary flex items-center gap-2"
          >
            <Image width={24} height={24} alt="GitHub" src="/github.svg" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/olena-savitska-5a3582244/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary flex items-center gap-2"
          >
            <Image width={24} height={24} alt="LinkedIn" src="/linkedin.svg" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
