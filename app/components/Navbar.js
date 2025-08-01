"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react";
import { navLinks } from "../constants/navLinks";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import AuthButtons from "./AuthButtons";
import Chatbot from "./Chatbot";

const Navbar = () => {
  const router = useRouter();
  const { isAuth, logout } = useAuth();

  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState(100);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setShowModal(true);
    setProgress(100);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!showModal) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 3.33;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [showModal]);

  useEffect(() => {
    if (progress <= 0 && showModal) {
      setShowModal(false);
      router.push("/");
    }
  }, [progress, showModal]);

  return (
    <>
      {/* Logout Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[999] flex items-center justify-center transition-all duration-300">
          <div className="bg-white px-6 py-5 rounded-xl shadow-lg text-center w-[320px]">
            <p className="text-gray-800 mb-3">
              Logged out successfully.{" "}
              <a href="/login" className="text-pink-600 font-normal no-underline">
                Login
              </a>{" "}
              again!
            </p>
            <div className="w-full h-1 bg-pink-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-pink-500 transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image src="/logo.jpg" alt="NeoNest" width={60} height={60} />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent ml-2">
                NeoNest
              </span>
            </div>

            {/* Hamburger - Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-pink-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <DesktopNav navLinks={navLinks} />

            {/* CTA - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <Chatbot />
              <AuthButtons isAuth={isAuth} onLogout={handleLogout} />
            </div>
          </div>

          {/* Mobile Menu */}
          <MobileMenu 
            navLinks={navLinks} 
            isOpen={menuOpen} 
            onClose={() => setMenuOpen(false)}
            isAuth={isAuth}
            onLogout={handleLogout}
          />
        </div>
      </header>
    </>
  );
};

export default Navbar;
