import React from "react";
import { useMemo } from "react";
import {MainContext} from "./MainContext";
type Props = {
  children:JSX.Element
}

export default function ThirdSectorProvider({ children }: Props) {
  const exampleValue = "Exemplo de valor";

  const value = useMemo(() => ({
    exampleValue: exampleValue
  }), [exampleValue]);
  return(
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  );
}
