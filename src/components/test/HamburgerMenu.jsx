import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={
        !isOpen ? "bg-white text-black p-4" : "bg-black text-white p-4"
      }
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Hamburger Menu</h1>
        <button className="ease-in-out duration-500" onClick={toggleMenu}>
          {!isOpen ? (
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
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          ) : (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="mt-4 h-[800px] ease-in-out duration-1000 bg-slate-900">
          <a href="#" className="block py-2">
            Home
          </a>
          <a href="#" className="block py-2">
            About
          </a>
          <a href="#" className="block py-2">
            Services
          </a>
          <a href="#" className="block py-2">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
