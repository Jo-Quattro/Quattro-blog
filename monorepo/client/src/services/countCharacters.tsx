import { Dispatch, SetStateAction } from "react";
//TODO USE IT TO INDICATE STRENGHT OF A PASSWORD OR CHARACTER LIMIT IN THE ARTICLE TITLE OR COMMENT SECTION
export function countCharacters(
  element: React.ChangeEvent<HTMLInputElement>,
  setCount: Dispatch<SetStateAction<number>>
) {
  setCount(element.target.value.length);
}
