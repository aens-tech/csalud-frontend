"use client";
import React, { useState } from "react";
import { Ambulance, Calendar } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Image
                src="/images/LogoAlivio.png"
                alt="Logo de Alivio"
                width={120}
                height={120}
                className="sm:w-24 md:w-32 lg:w-40"
              />
            </a>
          </div>

          {/* Emergency Button */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isOpen
                ? "bg-white text-primary border border-primary"
                : "bg-primary text-white"
                } px-4 py-2 rounded-full transition-colors flex items-center justify-center text-sm font-medium w-36`}
            >
              <span className="font-bold">Emergencia</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transform transition-transform duration-200 ml-2 ${isOpen ? "rotate-180" : ""
                  }`}
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 w-36">
                <div className="space-y-2 py-2 px-3">
                  <button className="w-full bg-primary text-white rounded-lg py-2 px-3 flex items-center space-x-3 hover:bg-primary transition-all">
                    <Ambulance size={14} />
                    <span className="text-[10px]">Llamar ambulancia</span>
                  </button>

                  <button className="w-full bg-white text-gray-700 rounded-lg py-2 px-3 flex items-center space-x-3 hover:bg-primary hover:text-white transition-all border border-gray-200">
                    <Calendar size={14} />
                    <span className="text-[10px]">Citas</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
