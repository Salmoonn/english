import { Word } from "shared/types/word.ts";
import { useState } from "react";
import { getWords } from "shared/lib/getWords.ts";

export const Tests = () => {
  const [words, setWords] = useState<Word[]>(
    JSON.parse(JSON.stringify(getWords())).sort(() => Math.random() - 0.5),
    // .slice(0, 20),
  );

  const [viewAnswer, setViewAnswer] = useState(false);
  const [count, setCount] = useState(1);
  const [countRightAnswer, setCountRightAnswer] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const handleClick = (isRight: boolean) => {
    if (!viewAnswer) return setViewAnswer(true);
    if (count === words.length) setIsEnd(true);
    if (isRight) setCountRightAnswer((prev) => prev + 1);
    else setWords((prev) => [...prev, words[count - 1]]);
    setCount((prev) => prev + 1);
    setViewAnswer(false);
  };

  if (!words) return null;

  if (isEnd)
    return (
      <div>
        <span>правильных ответов: </span>
        <span>
          {countRightAnswer}/{words.length} (
          {Math.round((countRightAnswer / words.length) * 100)}%)
        </span>
      </div>
    );

  return (
    <div>
      <div>
        progress: {count}/{words.length}
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>{words[count - 1].word}</span>
        <span> - </span>
        <span
          style={viewAnswer ? {} : { filter: "blur(3px)" }}
          // onClick={() => setViewAnswer(true)}
        >
          {words[count - 1].translate.join(", ")}
        </span>
      </div>
      {viewAnswer ? (
        <>
          <button style={{ color: "red" }} onClick={() => handleClick(false)}>
            false
          </button>
          <button style={{ color: "green" }} onClick={() => handleClick(true)}>
            true
          </button>
        </>
      ) : (
        <button onClick={() => setViewAnswer(true)}>show</button>
      )}
    </div>
  );
};
