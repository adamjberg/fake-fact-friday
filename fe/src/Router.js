import { Div } from "./Div";
import { HomePage } from "./HomePage";
import { ResultsPage } from "./ResultsPage";

export function Router() {
  const el = Div();

  addEventListener("popstate", (event) => {
    el.innerHTML = "";

    handleRouteUpdated();
  });

  function handleRouteUpdated() {
    if (window.location.pathname === "/results") {
      el.appendChild(ResultsPage());
    } else {
      el.appendChild(HomePage());
    }
  }

  handleRouteUpdated();

  return el;
}