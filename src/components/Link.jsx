import { useNavigation } from "../hooks/navigation-hook";
import classNames from "classnames";

export default function Link({ to, children, className, activeClassName }) {
  const { currentPath, navigate } = useNavigation();

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) return;

    // Prevent the standard navigation
    event.preventDefault();

    navigate(to);
  };

  const classes = classNames(
    "text-blue-700",
    className,
    currentPath === to && activeClassName
  );

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
