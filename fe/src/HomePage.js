import { Div } from "./Div";
import { Fact } from "./Fact";
import { setURL } from "./HistoryUtils";

export function HomePage() {
  return Div({
    children: [
      Fact({
        text: "This is a fact!",
        isFake: true,
        onClick() {
          setURL("/results");
        },
      }),
      Fact({
        text: "This is a fake fact",
        onClick() {
          setURL("/results");
        },
      }),
    ],
  });
}
