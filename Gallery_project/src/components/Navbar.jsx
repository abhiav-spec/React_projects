import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icons (npm i lucide-react)

export default function Navbar(elem) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Project Name */}
          <h1 className="text-2xl font-bold text-indigo-600">Gallery</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
            
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium" onClick={() => elem.prev()}>Prev</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium" onClick={() => elem.next()}>Next</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-3">
          <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium">Home</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium">Explore</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium">Upload</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium">Profile</a>
        </div>
      )}
    </nav>
  );
}
