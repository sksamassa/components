import Table from "../components/Table";

const data = [
  { name: "Orange", color: "bg-orange-500", score: 5 },
  { name: "Apple", color: "bg-red-500", score: 5 },
  { name: "Banana", color: "bg-yellow-500", score: 4 },
  { name: "Lime", color: "bg-green-500", score: 4 },
];

const config = [
  { label: "Name", render: (rowData) => rowData.name },
  {
    label: "Color",
    render: (rowData) => <div className={`p-3 border-2 ${rowData.color}`}></div>,
  },
  { label: "Score", render: (rowData) => rowData.score,
    
   },
];

export default function TablePage() {
  return <Table data={data} config={config} />;
}
