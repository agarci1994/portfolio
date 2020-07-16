import React from "react";
import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <div className="App n-resize">
      <div className="download">
        <a className="link-download"
          href="./images/CVAlejandro.pdf"
          download="cvAlejandro.pdf"
        >
          Download CV
        </a>
      </div>
      <Main />
    </div>
  );
}

export default App;
