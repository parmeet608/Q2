import { render } from "react-dom";
import App from "./App";

const app = document.querySelector("#app");

if (app !== null) {
  render(<App />, app);
}
