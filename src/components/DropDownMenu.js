import React, { useState } from 'react';
import { FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleMenu}
        className="relative flex rounded-full bg-gray-800 text-sm text-white p-2 focus:outline-none"
        aria-expanded={isOpen}
      >
        <FaUser className="w-6 h-6" />
        <span className="sr-only">Menu usuario</span>
      </button>
      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-40 bg-white text-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
          role="menu"
        >
          <a
            href="/paginas/login.html"
            className="block px-4 py-2 text-sm hover:bg-gray-200"
            role="menuitem"
          >
            <FaSignInAlt className="inline-block mr-2" />
            Iniciar sesión
          </a>
          <a
            href="/paginas/register.html"
            className="block px-4 py-2 text-sm hover:bg-gray-200"
            role="menuitem"
          >
            <FaSignOutAlt className="inline-block mr-2" />
            Registrarse
          </a>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
