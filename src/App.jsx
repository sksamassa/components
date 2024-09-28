import "./App.css";
import DropDownPage from "./pages/DropDownPage";
import ButtonPage from "./pages/ButtonPage";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex px-6 p-4 gap-x-4">
      <Sidebar />

      <Route path={"/accordion"}>
        <AccordionPage />
      </Route>
      <Route path={"/"}>
        <DropDownPage />
      </Route>
      <Route path={"/buttons"}>
        <ButtonPage />
      </Route>
    </div>
  );
}

export default App;
