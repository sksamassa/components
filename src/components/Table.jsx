export default function Table({ data, config }) {
  const renderedRows = data.map((fruit, index) => {
    const renderedCells = config.map((column) => {
      return <td className="p-3" key={column.label}>{column.render(fruit)}</td>;
    });

    return <tr key={index} className="border-b">{renderedCells}</tr>;
  });

  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}
