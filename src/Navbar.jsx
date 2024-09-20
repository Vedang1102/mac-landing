/* eslint-disable no-unused-vars */
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-['SF_Pro_Display',_sans-serif] font-semibold tracking-tight">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M20.145 16.17c-.489 1.14-.742 1.662-1.392 2.682-.902 1.384-2.188 3.11-3.733 3.137-1.461.028-1.839-1.01-3.79-1.01-1.956 0-2.387.983-3.808 1.037-1.591.057-2.761-1.634-3.662-3.013-3.271-5.035-3.619-11.078-1.603-14.214 1.164-1.83 3.095-2.999 4.873-2.999 1.505 0 2.478 1.013 3.73 1.013 1.216 0 2.444-1.018 4.111-1.018 1.149 0 3.077.555 4.218 2.305-3.705 2.025-3.104 7.339-.644 8.896zm-4.644-13.907c.759-.917 1.329-2.207 1.114-3.477-1.085.055-2.405.73-3.165 1.646-.692.835-1.303 2.137-1.073 3.39 1.206.048 2.409-.629 3.124-1.559z"/>
            </svg>
          </a>
        </div>

        <ul className="flex space-x-8 font-['SF_Pro_Display',_sans-serif] text-lg">
          <li className="hover:text-gray-300 transition-colors">
            <a href="#">Mac</a>
          </li>
          <li className="hover:text-gray-300 transition-colors">
            <a href="#">iPad</a>
          </li>
          <li className="hover:text-gray-300 transition-colors">
            <a href="#">iPhone</a>
          </li>
          <li className="hover:text-gray-300 transition-colors">
            <a href="#">Watch</a>
          </li>
          <li className="hover:text-gray-300 transition-colors">
            <a href="#">Support</a>
          </li>
        </ul>

        <div className="flex space-x-6">
          <button className="hover:text-gray-300 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 6.75a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35"
              />
            </svg>
          </button>

          <button className="hover:text-gray-300 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h7.5a1.5 1.5 0 011.5 1.5v12.75h-10.5v-12.75a1.5 1.5 0 011.5-1.5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 6.75h13.5a1.5 1.5 0 011.5 1.5v3.75h-16.5v-3.75a1.5 1.5 0 011.5-1.5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
