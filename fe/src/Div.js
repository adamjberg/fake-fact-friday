export function Div({
  innerText
}) {
  const el = document.createElement("div");

  el.innerText = innerText;

  return el;
}
