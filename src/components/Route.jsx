import { useNavigation } from "../hooks/navigation-hook";

export default function Route({ path, children }) {
  const { currentPath, navigate } = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
}
