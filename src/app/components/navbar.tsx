"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white p-4 border-b border-gray-700 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">
          <Link href="/">My gsap projects</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/donuts" className="hover:text-secondary">
              Donut Animation
            </Link>
          </li>
          <li>
            <Link href="/cards" className="hover:text-secondary">
              Cards
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
