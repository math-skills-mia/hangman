import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [showDropNav, setShowDropNav] = useState(false);
  return (
    <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-lime-900 text-white justify-between items-center h-15 relative">
      {/* Logo */}
      <h1 className="shrink-0 font-bold text-2xl tracking-wider">GAMES HUB</h1>
      {/* Desktop Menu */}
      <ul className="hidden md:flex text-lg font-semibold items-center">
        <li className="p-4 hover:bg-lime-950 hover:font-bold">HOME</li>
        <li className="p-4 hover:bg-lime-950 hover:font-bold">GAMES</li>
        <li className="p-4 hover:bg-lime-950 hover:font-bold">ABOUT</li>
      </ul>
      {/* Menu Button */}
      <button
        onClick={() => setShowDropNav(!showDropNav)}
        className="block md:hidden z-50 shrink-0"
      >
        {showDropNav ? (
          <AiOutlineClose size={26} />
        ) : (
          <AiOutlineMenu size={26} />
        )}
      </button>
      {/* Mobile Dropdown Menu */}
      <div
        className={
          showDropNav
            ? "fixed right-0 top-0 w-[60%] h-full bg-lime-800 ease-in-out duration-500 z-40"
            : "fixed -right-full top-0 ease-in-out duration-500 h-full"
        }
      >
        {/* Dropdown Menu Logo */}
        <h1 className="w-full text-2xl font-bold m-4 mt-8">GAMES HUB</h1>
        <ul>
          <li className="p-4 border-t border-gray-300 text-xl hover:bg-lime-950 hover:font-bold">
            HOME
          </li>
          <li className="p-4 border-t border-gray-300 text-xl hover:bg-lime-950 hover:font-bold">
            GAMES
          </li>
          <li className="p-4 border-t border-gray-300 text-xl hover:bg-lime-950 hover:font-bold">
            ABOUT
          </li>
        </ul>
      </div>
      {/* Darkens Screen when Dropdown Menu is Open */}
      {showDropNav && (
        <div
          onClick={() => setShowDropNav(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </div>
  );
}

export default Navbar;
