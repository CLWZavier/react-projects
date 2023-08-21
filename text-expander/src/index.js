import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App
      collapsedNumWords={30}
      expandButtonText="Show more"
      collapseButtonText="Collapse text"
      buttonColor="purple"
      className="box"
    />
  </StrictMode>
);
