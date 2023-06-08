import { Div } from "./Div";

export function Fact({
  text,
  isFake
}) {
  return Div({
    innerText: text,
    styles: {
      color: isFake ? "red" : "green"
    }
  });
}