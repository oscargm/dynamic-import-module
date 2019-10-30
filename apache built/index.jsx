import MyComponent from "./dependencies";
import React from "https://unpkg.com/react@16/umd/react.development.js";
import { render } from "https://unpkg.com/react-dom@16/umd/react-dom.development.js";

export default function init(elementId) {
  const App = () => <MyComponent />;
  render(<App />, document.getElementById(elementId));
}
