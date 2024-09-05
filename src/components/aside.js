import React from 'react';

const Sidebar = () => {
  return (
    <>
      <aside className="w-60 text-white fixed h-screen bg-gray-50 bg-gray-900 mt-20 hidden" id="aside1">
        <div className="flex flex-col">
          <nav className="flex-1 px-4 py-6 bg-gray-500 bg-gray-900">
            <ul>
              <li className="mb-2">
                <a href="/" className="flex items-center px-4 py-2 text-sm font-bold rounded-md bg-gray-800 h-10">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-black fill-white">
                    <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
                  </svg>
                  <span className="ml-6">Inicio</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <aside className="w-24 text-white fixed h-screen bg-gray-50 bg-gray-900 mt-20" id="aside2">
        <div className="flex flex-col h-full">
          <nav className="flex-1 px-4 py-6 bg-gray-500 bg-gray-900">
            <ul>
              <li className="mb-2">
                <a href="/" className="flex items-center justify-center px-4 py-8 text-sm font-bold rounded-lg bg-gray-800 h-10">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-black fill-white">
                    <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
