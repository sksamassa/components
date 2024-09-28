import { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";

export default function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

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
        <div onClick={() => handleOptionClick(option)} key={option.value}>
          {option.label}
        </div>
      </div>
    );
  });

  const content = value?.label || "Select...";

  const icon = isOpen ? <GoTriangleUp /> : <GoTriangleDown />;

  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center gap-x-4 bg-gray-100 p-4 rounded-t-md cursor-pointer w-full"
        onClick={handleClick}
      >
        {content} {icon}
      </div>
      {isOpen && (
        <div className="absolute top-full border bg-white border-gray-100 shadow-md p-4 w-full rounded-b-md cursor-pointer">
          {renderedOptions}
        </div>
      )}
    </div>
  );
}
