import { GoBell } from "react-icons/go";
import { GoDatabase } from "react-icons/go";

import Button from "../components/Button";

function ButtonPage() {
  return (
    <div className="block space-y-4">
      <Button className="m-4" primary outline rounded>
        Primary
      </Button>
      <Button secondary outline>
        Secondary
      </Button>
      <Button success>
        <GoBell /> Success
      </Button>
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

export default ButtonPage;
