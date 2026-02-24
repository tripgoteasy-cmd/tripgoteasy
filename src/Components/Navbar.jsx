import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/mainlogo.png"; // Make sure your logo is inside src/assets

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Destinations", id: "destinations" },
    { name: "Packages", id: "packages" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed w-full bg-[#0A192F] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Trip Got Easy Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-white">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-blue-400 transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Enquire Now Button (Desktop) */}
        <a
          href="https://wa.me/919876543210?text=Hi%20I%20would%20like%20to%20enquire%20about%20your%20Kashmir%20tour%20packages."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Enquire Now
        </a>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white">
          {isOpen ? (
            <X onClick={() => setIsOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu onClick={() => setIsOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0A192F] shadow-md">
          <ul className="flex flex-col items-center space-y-6 py-6 text-white">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* Mobile Enquire Button */}
            <a
              href="https://wa.me/919876543210?text=Hi%20I%20would%20like%20to%20enquire%20about%20your%20Kashmir%20tour%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Enquire Now
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
