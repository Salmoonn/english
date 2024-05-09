import { getWords } from "shared/lib/getWords";
import { ItemList } from "entities/item-list";

export const List = () => {
  const words = getWords();

  return (
    <div>{words?.map((word) => <ItemList key={word.word} word={word} />)}</div>
  );
};
