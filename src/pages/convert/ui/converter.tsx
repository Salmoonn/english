import { ChangeEvent, useEffect, useState } from "react";
import { convert } from "../lib";
import { Word } from "shared/types/word.ts";
import { List } from "widgets/list";

export const Converter = () => {
  const [{ season, series, text }, dispatch] = useState({
    season: 1,
    series: 1,
    text: "",
  });
  const [result, setResult] = useState<Word[]>();

  useEffect(() => {
    setResult(convert(text, season, series));
  }, [season, series, text]);

  const handleChangeSeason = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch((prev) => ({ ...prev, season: +e.target.value }));
  };

  const handleChangeSeries = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch((prev) => ({ ...prev, series: +e.target.value }));
  };

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch((prev) => ({ ...prev, text: e.target.value }));
  };

  return (
    <div>
      <label>season</label>
      <br />
      <input type="number" value={season} onChange={handleChangeSeason} />
      <br />
      <label>series</label>
      <br />
      <input type="number" value={series} onChange={handleChangeSeries} />
      <br />
      <label>input</label>
      <textarea value={text} onChange={handleChangeText} />
      <label>output</label>
      <textarea value={JSON.stringify(result)} />
      {result && <List />}
    </div>
  );
};
