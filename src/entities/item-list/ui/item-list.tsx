import { Word } from "shared/types/word.ts";
import s from "./item-list.module.scss";
// import { useState } from "react";

export const ItemList = ({ word }: { word: Word }) => {
  // const [isEdit, setIsEdit] = useState(false);

  // <div key={word.word}>
  //   <span style={{ fontWeight: "bold" }}>{word.word}</span>
  //   <span> - </span>
  //   <span>{word.translate}</span>
  // </div>

  return (
    <div className={s.item_list}>
      <div>
        <span>{word.word}</span>
        <span> - </span>
        <span>{word.translate.join(", ")}</span>
      </div>
      {/*<div className={s.controls}>*/}
      {/*  /!*<div onClick={() => setIsEdit(true)}>✏️</div>*!/*/}
      {/*  /!*<div>❌</div>*!/*/}
      {/*</div>*/}
    </div>
  );
};
