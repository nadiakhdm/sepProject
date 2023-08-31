"use client";

import {createContext} from "react";

export const SepContext = createContext({});

export const SepConsumer = SepContext.Consumer;
export const SepContextProvider = SepContext.Provider;

export default function SepProvider({children}) {
  return <SepContextProvider value={{}}>{children}</SepContextProvider>;
}
