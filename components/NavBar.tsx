// components/NavBar.tsx
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center py-4 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-md">
      <div className="flex space-x-6">
        <Link href="/" className="flex items-center space-x-2 text-white hover:text-gray-400">
          <span>Home</span>
        </Link>
        <Link href="/join" className="flex items-center space-x-2 text-white hover:text-gray-400">
          <span>Join</span>
        </Link>
        <Link href="/create" className="flex items-center space-x-2 text-white hover:text-gray-400">
          <span>Create</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
