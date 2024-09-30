import Table from "./Table";
import { FaSort } from "react-icons/fa";
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import useSort from "../hooks/use-sort";

export default function SortableTable(props) {
  const { config, data } = props;
  const { 
    sortOrder, 
    sortBy, 
    setSortColumn, 
    sortedData 
  } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
      return <FaSort className="transition duration-150" />;
    }

    if (sortOrder === null) {
      return <FaSort className="transition duration-150" />;
    } else if (sortOrder === "asc") {
      return <FaSortUp className="transition duration-150" />;
    } else if (sortOrder === "desc") {
      return <FaSortDown className="transition duration-150" />;
    }
  }

  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}
