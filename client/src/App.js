import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const fetchInfo = async () => {
  try {
    const response = await fetch("/api/objects");
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const [info, setInfo] = useState("");

  useEffect(() => {
    async function awaitInfo() {
      const response = await fetchInfo();
      setInfo(response.hello);
    }

    awaitInfo();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {info}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
