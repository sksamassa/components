import Link from "./Link";

export default function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
  ];

  const renderedLinks = links.map((link, index) => {
    return (
      <Link
        className=" mb-4"
        key={index}
        to={link.path}
        activeClassName="font-bold border-l-2 border-l-blue-700 pl-4"
      >
        {link.label}
      </Link>
    );
  });

  return <div className="flex flex-col sticky">{renderedLinks}</div>;
}
