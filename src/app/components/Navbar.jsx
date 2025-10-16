"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
          <span className="text-primary">⬤</span> GABOIL
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 text-sm uppercase">
          <li><a href="#" className="hover:text-primary">À propos</a></li>
          <li><a href="#" className="hover:text-primary">Activités</a></li>
          <li><a href="#" className="hover:text-primary">Offres & Promos</a></li>
          <li><a href="#" className="hover:text-primary">Blog</a></li>
          <li><a href="#" className="hover:text-primary">Contact</a></li>
        </ul>

        {/* Langue bouton */}
        <button className="hidden md:block bg-primary text-white px-4 py-1 rounded-full text-sm">
          Afr
        </button>

        {/* Burger menu mobile */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center space-y-4 py-6 border-t border-gray-700">
          <a href="#" className="hover:text-primary" onClick={toggleMenu}>À propos</a>
          <a href="#" className="hover:text-primary" onClick={toggleMenu}>Activités</a>
          <a href="#" className="hover:text-primary" onClick={toggleMenu}>Offres & Promos</a>
          <a href="#" className="hover:text-primary" onClick={toggleMenu}>Blog</a>
          <a href="#" className="hover:text-primary" onClick={toggleMenu}>Contact</a>
          <button className="bg-primary text-white px-6 py-2 rounded-full text-sm">
            Afr
          </button>
        </div>
      )}
    </nav>
  );
}
