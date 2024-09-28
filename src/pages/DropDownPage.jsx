import DropDown from "../components/DropDown";
import { useState } from "react";

const options = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];

export default function DropDownPage() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected((current) => (current = option));
  };

  return (
    <div className="flex">
      <DropDown options={options} value={selected} onChange={handleSelect} />
    </div>
  );
}
