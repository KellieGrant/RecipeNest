import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#f9fafb] shadow-md px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <h1 className="text-3xl font-heading text-[#1e1e1e]">Recipe Nest</h1>
          <p className="font-base text-[#6b7280]">
            A modern take on a classic cookbook
          </p>
        </Link>

        {/* Nav Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="add-recipe"
              className="text-[#1e1e1e] border border-[#e5e7eb]-200 rounded-lg px-4 py-2 hover:border-gray-400 hover:text-[#6b7280] flex items-center gap-2"
            >
              Add Recipe
            </Link>
          </li>
          <li>
            <Link
              to="favorites"
              className="text-[#1e1e1e] border border-[#e5e7eb]-200 rounded-lg px-4 py-2 hover:border-gray-400 hover:text-[#6b7280] flex items-center gap-2"
            >
              <AiFillHeart className="text-[#1e1e1e]-500 text-xl" />
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
