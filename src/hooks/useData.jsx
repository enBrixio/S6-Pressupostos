import { useState } from "react";
import Data from "../data/dataBudget.json";

export function useData() {
  const [data] = useState(Data);

  return {
    data
      };
}