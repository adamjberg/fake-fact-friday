import { Div } from "./Div";
import { Fact } from "./Fact";

const el = Div({
  children: [
    Fact({
      text: "This is a fact",
      isFake: true
    }),
    Fact({
      text: "This is a fake fact"
    }),
  ]
});

document.body.appendChild(el);