import AppContext from "../context/app-context";
import { useContext } from "react";

const useAppData = () => useContext(AppContext);

export default useAppData;
