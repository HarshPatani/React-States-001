import "./App.css";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <main className={toggle === false ? "main-light" : "main-dark"}>
      <div className="container">
        <h1 className={toggle === false ? "h1-light" : "h1-dark"}>
          Overreacted
        </h1>
        <div className="para">
          <h2 className={toggle === false ? "h2-light" : "h2-dark"}>
            The WET Codbase
          </h2>
          <p className={toggle === false ? "p-light" : "p-dark"}>
            <i>Sunday 4th, 2020 11 min read</i>
          </p>
          <p className={toggle === false ? "p-light" : "p-dark"}>
            <i>Come waste your time with me</i>
          </p>
        </div>
        <div className="para">
          <h2 className={toggle === false ? "h2-light" : "h2-dark"}>
            Goodby, Clean Code
          </h2>
          <p className={toggle === false ? "p-light" : "p-dark"}>
            <i>Friday 22nd 2019 5 min lead</i>
          </p>
          <p className={toggle === false ? "p-light" : "p-dark"}>
            <i>Let clean and guide you. Then let it go.</i>
          </p>
        </div>
        <div className="para">
          <h2 className={toggle === false ? "h2-light" : "h2-dark"}>
            My Decade In Review
          </h2>
          <p className={toggle === false ? "p-light" : "p-dark"}>
            <i>Saturday 11th, 2018 5 min read</i>
          </p>
          <p className={toggle === false ? "p-light" : "p-dark"}>
            <i>A personal reflection.</i>
          </p>
        </div>
        <div className="para">
          <h2 className={toggle === false ? "h2-light" : "h2-dark"}>
            What Are The React Team Principles
          </h2>
          <p className={toggle === false ? "p-light" : "p-dark"}>
            <i>Thursday Ath, 2015 5m read</i>
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          setToggle((prevValue) => {
            setToggle(!prevValue);
          });
        }}
        className={
          toggle === false
            ? "toggle-btn toggle-btn-light"
            : "toggle-btn toggle-btn-dark"
        }
      >
        Toggle
      </button>
    </main>
  );
}

export default App;
