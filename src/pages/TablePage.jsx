// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

const data = [
  { name: "Orange", color: "bg-orange-500", score: 5 },
  { name: "Apple", color: "bg-red-500", score: 5 },
  { name: "Banana", color: "bg-yellow-500", score: 4 },
  { name: "Lime", color: "bg-green-500", score: 4 },
];

const config = [
  {
    label: "Name",
    render: (fruit) => fruit.name,
    sortValue: (fruit) => fruit.name,
  },
  {
    label: "Color",
    render: (fruit) => (
      <div className={`p-3 border-2 ${fruit.color}`}></div>
    ),
  },
  {
    label: "Score",
    render: (fruit) => fruit.score,
    sortValue: (fruit) => fruit.score,
  },
];

export default function TablePage() {
  return <SortableTable data={data} config={config} />;
}
