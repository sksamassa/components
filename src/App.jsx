import { useState } from "react";
import "./App.css";
import DropDownPage from "./pages/DropDownPage";

function App() {
  const handleAge = (newAge) => {
    setAge(newAge);
  };

  return (
    <div className="">
      <DropDownPage />
    </div>
  );
}

export default App;
