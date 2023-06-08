export function Div({
  innerText,
  children,
  styles
}) {
  const el = document.createElement("div");

  if (styles) {
    for (const key of Object.keys(styles)) {
      const elementKey = key;
      const stylesKey = styles[key];
      if (stylesKey) el.style[elementKey] = stylesKey;
    }
  }

  if (innerText) {
    el.innerText = innerText;
  }

  if (children) {
    children.forEach(el.appendChild.bind(el));
  }

  return el;
}
