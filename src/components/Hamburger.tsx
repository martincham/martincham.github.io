import React, { useState } from "react";

const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center w-full">
      <button
        className="flex flex-col justify-center items-center w-10 h-10 space-y-1 md:hidden"
        onClick={toggle}
        aria-label="Toggle menu"
      >
        <span
          className={`h-1 w-5  rounded transition-transform duration-300 ${
            isOpen ? "transform rotate-45 translate-y-1" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-5  rounded transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-5  rounded transition-transform duration-300 ${
            isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>
    </div>
  );
};

export default Hamburger;
