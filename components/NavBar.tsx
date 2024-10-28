// components/NavBar.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebaseConfig";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Extract username without domain
  const username = user ? user.email.split("@")[0] : "Logged out";

  return (
    <nav className="relative flex items-center justify-between py-4 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-md">
      {/* Hamburger icon for mobile */}
      <div className="md:hidden flex items-center ml-4"> {/* Move hamburger to the left */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <div className="flex-grow flex justify-center space-x-6">
        <Link href="/" className="hidden md:flex items-center space-x-2 text-white hover:text-gray-400 text-lg">
          <span>Home</span>
        </Link>
        <Link href="/join" className="hidden md:flex items-center space-x-2 text-white hover:text-gray-400 text-lg">
          <span>Join</span>
        </Link>
        <Link href="/create" className="hidden md:flex items-center space-x-2 text-white hover:text-gray-400 text-lg">
          <span>Create</span>
        </Link>
        <Link href="/login" className="hidden md:flex items-center space-x-2 text-white hover:text-gray-400 text-lg">
          <span>Login</span>
        </Link>
      </div>

      <div className="absolute right-4 flex items-center space-x-4">
        <span className="text-white text-lg">{username}</span> {/* Increased font size here */}
        {user && (
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-lg"
          >
            Logout
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-48 bg-gray-800 rounded-lg shadow-lg z-20 md:hidden">
          <Link href="/" className="block px-4 py-2 text-white hover:bg-gray-700">Home</Link>
          <Link href="/join" className="block px-4 py-2 text-white hover:bg-gray-700">Join</Link>
          <Link href="/create" className="block px-4 py-2 text-white hover:bg-gray-700">Create</Link>
          <Link href="/login" className="block px-4 py-2 text-white hover:bg-gray-700">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
