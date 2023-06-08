export function Div({
  innerText,
  children,
  styles,
  onClick
} = {}) {
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

  if (onClick) {
    el.addEventListener("click", onClick.bind(el));
  }

  return el;
}
