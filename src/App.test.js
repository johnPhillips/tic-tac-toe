import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders board", () => {
  const { container } = render(<App />);
  const app = container.firstChild;
  expect(app.firstChild.className).toBe("board");
});
