import { Word } from "shared/types/word";

export const getWords = (): Word[] | null => {
  const words = localStorage.getItem("words");
  if (words) return JSON.parse(words);
  return null;
};
