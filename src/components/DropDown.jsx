import { useState, useEffect, useRef } from "react";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import Panel from "./Panel";

export default function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (!dropdownRef?.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option) => {
    // CLOSE DROPDONW
    setIsOpen(false);
    // WHAT OPTION THE USER CLICK ON ???
    onChange(option);
  };

  const renderedOptions = options.map((option, index) => {
    return (
      <div>
        <div
          className="w-full transition-all duration-150 hover:bg-gray-100"
          onClick={() => handleOptionClick(option)}
          key={option.value}
        >
          {option.label}
        </div>
      </div>
    );
  });

  const content = value?.label || "Select...";

  const icon = isOpen ? <GoTriangleUp /> : <GoTriangleDown />;

  return (
    <div ref={dropdownRef} className="w-48 relative">
      <Panel
        className="flex justify-between items-center gap-x-4 bg-gray-100 rounded-t-md"
        onClick={handleClick}
      >
        {content} {icon}
      </Panel>
      {isOpen && (
        <Panel className="absolute border bg-white border-gray-100 shadow-md rounded-b-md">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}
