import { Div } from "./Div";

export function Fact({
  text,
  isFake,
  onClick
}) {
  return Div({
    innerText: text,
    styles: {
      color: isFake ? "red" : "green"
    },
    onClick
  });
}