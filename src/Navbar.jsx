import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 w-full">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">Home</Link>
        <div className="flex space-x-4">
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500 hover:text-gray-300" : "hover:text-gray-300"}>About</NavLink>
            <NavLink to="/course" className={({ isActive }) => isActive ? "text-red-500 hover:text-gray-300" : "hover:text-gray-300"}>Course</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500 hover:text-gray-300" : "hover:text-gray-300"}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
