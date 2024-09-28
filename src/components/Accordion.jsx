import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState();

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentIndex) => {
      return currentIndex === nextIndex ? -1 : nextIndex;
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>{isExpanded ? <GoChevronUp /> : <GoChevronDown />}</span>
    );

    return (
      <div
        className="border border-gray-1"
        key={item.id}
      >
        <div
          className="flex items-center justify-between cursor-pointer bg-gray-100 p-4-"
          onClick={() => handleClick(index)}
        >
          {item.label} {icon}
        </div>
        {isExpanded && <div className="p-4">{item.content}</div>}
      </div>
    );
  });

  return <div className="">{renderedItems}</div>;
}
