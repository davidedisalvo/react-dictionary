import React, { useContext } from "react";
import { WordsContext } from "./WordsContext";

export const Test = () => {
  const value = useContext(WordsContext)(value);
  return <div>{value}</div>;
};
