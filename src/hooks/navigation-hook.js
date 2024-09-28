import NavigationContext from "../contexts/navigation";
import { useContext } from "react";

export function useNavigation() {
  return useContext(NavigationContext)
}