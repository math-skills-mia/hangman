import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  const [showDropNav, setShowDropNav] = useState(false);
  return (
    <>
      {/* Sticky Navbar */}
      <div className="sticky top-0 w-full bg-lime-900/90 backdrop-blur-sm text-white z-20">
        <div className="flex max-w-7xl mx-auto h-15 px-4 sm:px-6 lg:px-8 justify-between items-center">
          {/* Logo */}
          <h1>
            <Link
              to={"/homepage"}
              className="shrink-0 font-bold text-2xl tracking-wider hover:lime-glow hover:font-extrabold"
            >
              GAMES HUB
            </Link>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex text-lg font-semibold items-center">
            <li className="block p-4 hover:bg-lime-950 hover:font-bold">
              GAMES
            </li>
            <li>
              <Link
                to={"/about"}
                className="block p-4 hover:bg-lime-950 hover:font-bold"
              >
                ABOUT
              </Link>
            </li>
          </ul>

          {/* Spacer for mobile to maintain layout */}
          <div className="block md:hidden w-6 h-6" />
        </div>
      </div>

      {/* Menu/Close Button */}
      <button
        onClick={() => setShowDropNav(!showDropNav)}
        className="fixed top-3 right-4 md:hidden z-50 shrink-0 text-white"
        style={{ right: "1rem" }} // Additional positioning
      >
        {showDropNav ? (
          <AiOutlineClose size={26} />
        ) : (
          <AiOutlineMenu size={26} />
        )}
      </button>

      {/* Darkens Screen */}
      {showDropNav && (
        <div
          onClick={() => setShowDropNav(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      {/* Mobile Dropdown Menu */}
      <div
        className={
          showDropNav
            ? "fixed right-0 top-0 w-[60%] h-full bg-lime-800 text-white transition-all ease-in-out duration-500 z-40"
            : "fixed -right-full top-0 transition-all ease-in-out duration-500 h-full z-40"
        }
      >
        <h1 className="w-full text-2xl font-bold m-4 mt-8">GAMES HUB</h1>
        <ul>
          <li className="block p-4 border-t border-gray-300 text-xl hover:bg-lime-950 hover:font-bold">
            GAMES
          </li>
          <li>
            <Link
              to={"/about"}
              className="block p-4 border-t border-gray-300 text-xl hover:bg-lime-950 hover:font-bold"
              onClick={() => setShowDropNav(false)}
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
