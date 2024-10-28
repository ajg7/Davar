import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <div>Hello, React + TypeScript! Darkness</div>;
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
