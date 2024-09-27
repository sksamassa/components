import "./App.css";
import Accordion from "./components/Accordion";
// import ButtonPage from "./pages/ButtonPage";

const items = [
  {
    id: 1,
    label: "Can I can use React on a project?",
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur ornare vitae per quam nascetur curae metus consectetur consectetur. Nunc turpis parturient sit condimentum nibh nisi cubilia nostra. Mollis molestie ac purus leo suscipit vehicula. Ex consectetur dolor morbi vestibulum; erat gravida integer. Condimentum nisl per luctus per efficitur. Sollicitudin aptent inceptos magna mollis elementum molestie. Nascetur sapien hendrerit dui cras bibendum vestibulum. Semper malesuada at litora turpis, sollicitudin per.`,
  },
  {
    id: 2,
    label: "Can I can use React on a project?",
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur ornare vitae per quam nascetur curae metus consectetur consectetur. Nunc turpis parturient sit condimentum nibh nisi cubilia nostra. Mollis molestie ac purus leo suscipit vehicula. Ex consectetur dolor morbi vestibulum; erat gravida integer. Condimentum nisl per luctus per efficitur. Sollicitudin aptent inceptos magna mollis elementum molestie. Nascetur sapien hendrerit dui cras bibendum vestibulum. Semper malesuada at litora turpis, sollicitudin per.`,
  },
  {
    id: 3,
    label: "Can I can use React on a project?",
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur ornare vitae per quam nascetur curae metus consectetur consectetur. Nunc turpis parturient sit condimentum nibh nisi cubilia nostra. Mollis molestie ac purus leo suscipit vehicula. Ex consectetur dolor morbi vestibulum; erat gravida integer. Condimentum nisl per luctus per efficitur. Sollicitudin aptent inceptos magna mollis elementum molestie. Nascetur sapien hendrerit dui cras bibendum vestibulum. Semper malesuada at litora turpis, sollicitudin per.`,
  },
  {
    id: 4,
    label: "Can I can use React on a project?",
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur ornare vitae per quam nascetur curae metus consectetur consectetur. Nunc turpis parturient sit condimentum nibh nisi cubilia nostra. Mollis molestie ac purus leo suscipit vehicula. Ex consectetur dolor morbi vestibulum; erat gravida integer. Condimentum nisl per luctus per efficitur. Sollicitudin aptent inceptos magna mollis elementum molestie. Nascetur sapien hendrerit dui cras bibendum vestibulum. Semper malesuada at litora turpis, sollicitudin per.`,
  },
  {
    id: 5,
    label: "Can I can use React on a project?",
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur ornare vitae per quam nascetur curae metus consectetur consectetur. Nunc turpis parturient sit condimentum nibh nisi cubilia nostra. Mollis molestie ac purus leo suscipit vehicula. Ex consectetur dolor morbi vestibulum; erat gravida integer. Condimentum nisl per luctus per efficitur. Sollicitudin aptent inceptos magna mollis elementum molestie. Nascetur sapien hendrerit dui cras bibendum vestibulum. Semper malesuada at litora turpis, sollicitudin per.`,
  },
];

function App() {
  return (
    <div className="">
      <Accordion items={items} />
    </div>
  );
}

export default App;
