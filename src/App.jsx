import { useState } from "react";
import { GoBell } from "react-icons/go";
import { GoDatabase } from "react-icons/go";
import "./App.css";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Clicked!')
  }

  return (
    <div className="block">
      <Button className="m-4" onMouseEnter={() => console.log('Mouse enters')} onClick={handleClick} primary outline rounded>
        Primary
        
      </Button>
      <Button secondary outline>
        Secondary
      </Button>
      <Button success><GoBell /> Success</Button>
      <Button warning outline>
        Warning
      </Button>
      <Button danger outline>
      <GoDatabase />
        Danger
      </Button>
    </div>
  );
}

export default App;
