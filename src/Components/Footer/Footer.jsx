import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] text-white">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center gap-4">
        <p className="text-2xl md:text-3xl font-bold tracking-wide">Contact me </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 text-2xl md:text-3xl">
          <a
            href="https://github.com/AntoniosGaber"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/antoniosgaber"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.facebook.com/tony.gaber"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:scale-110 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/antonios.gaber"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-110 transition"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="text-sm opacity-80 mt-2">
          © 2025 <span className="font-bold">Antonios Gaber</span> — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
