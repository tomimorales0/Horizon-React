import MyImage from '../assets/Banco-removebg-preview.webp';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

function Header() {
  const toggleDropdown = () => {
    const menu = document.getElementById('user-menu');
    menu.classList.toggle('hidden');
  };

  return (
    <header className="fixed w-full top-0 bg-gray-900 text-white" style={{ zIndex: 1000 }}>
      <div className="flex items-center justify-between px-5">
        <div className="flex items-center justify-between h-20 py-4">
          <button
            className="hover:rounded-full hover:bg-gray-700 w-12 h-12 flex justify-center items-center"
            id="toggle-button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
          <a className="flex items-center justify-center select-none" href="/">
            <img src="/assets/Banco-removebg-preview.webp" alt="logo-banco.webp" width="75px" />
            <h1 className="text-2xl font-bold self-start mt-3">Horizon</h1>
          </a>
        </div>
        <div className="relative ml-3">
          <button
            type="button"
            className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Menu usuario</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="http://www.w3.org/2000/svg" width="24px" className="fill-black fill-white">
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
            </svg>
          </button>
          <div
            id="user-menu"
            className="hidden absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white text-gray-700 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 transform opacity-0 scale-95"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex="-1"
          >
            <a href="/paginas/login.html" className="block px-4 py-2 text-sm hover:bg-gray-500">Iniciar sesión</a>
            <a href="/paginas/login.html" className="block px-4 py-2 text-sm hover:bg-gray-500">Registrarse</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
