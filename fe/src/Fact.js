import { Div } from "@xyz-digital/dom";

export function Fact({
  text,
  isFake,
  onClick
}) {
  return Div({
    attr: {
      innerText: text,
      onclick: onClick
    },
    styles: {
      color: isFake ? "red" : "green"
    },
  });
}