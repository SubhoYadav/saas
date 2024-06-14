import { useContext } from "react";
import ToggleContext from "../context/toggle-context";

const useReadToggleCtx = () => {
  const toggleCtx = useContext(ToggleContext);
  return toggleCtx;
};

export default useReadToggleCtx;
