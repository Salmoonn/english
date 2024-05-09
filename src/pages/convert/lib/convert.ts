import { Word } from "shared/types/word.ts";

export const convert = (str: string, season: number, series: number) => {
  const result: Word[] = [];

  str.split("\n").forEach((line) => {
    if (!line) return;
    const word = line.trim().split(":");
    result.push({
      word: word[0],
      translate: word[1]?.split(",").map((e) => e.trim()) ?? [""],
      season,
      series,
    });
  });

  result.sort((a, b) => (a.word.toLowerCase() > b.word.toLowerCase() ? 1 : -1));

  return result;
};
