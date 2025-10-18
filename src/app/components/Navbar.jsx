"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-black/100 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <Image src="/icons/logo.svg" alt="Gab Oil" width={40} height={40} />
            <span className="font-bold text-xl text-gray-100">GABOIL</span>
          </div>

          {/* LINKS DESKTOP */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-200 font-medium">
              Accueil
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-200 font-medium">
              À propos
            </Link>
            <Link href="/activites" className="text-gray-600 hover:text-gray-200 font-medium">
              Activites
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-200 font-medium">
              Contact
            </Link>
          </div>

          {/* MENU BURGER MOBILE */}
          <div className="md:hidden">
            <button onClick={toggleMenu} >
              <Image
                src={isOpen ? "/icons/close.svg" : "/icons/menu.svg"}
                alt="Menu"
                width={28}
                height={28}
                

                
              />
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="bg-gray-300 flex flex-col items-center py-4 space-y-3">
            <Link href="/" onClick={closeMenu} className="text-gray-700 hover:text-gray-70 font-medium">
              Accueil
            </Link>
            <Link href="/about" onClick={closeMenu} className="text-gray-700 hover:text-gray-70 font-medium">
              À propos
            </Link>
            <Link href="/activites" onClick={closeMenu} className="text-gray-700 hover:text-gray-70 font-medium">
              Activites
            </Link>
            <Link href="/contact" onClick={closeMenu} className="text-gray-700 hover:text-gray-70 font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
