import { createContext } from "react";

type globalContext = {
  exampleValue: string;
};

const MainContext = createContext({} as globalContext);

export {MainContext};