import React, { useState, useEffect } from "react";
import "./App.css";
import ArtObject from "./components/Object/Object";

const fetchObjects = async () => {
  try {
    const response = await fetch("/api/objects");
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const [objects, setObjects] = useState("");

  useEffect(() => {
    async function awaitObjects() {
      const response = await fetchObjects();
      setObjects(response);
    }

    awaitObjects();
  }, []);

  const artObjects =
    objects &&
    objects.length &&
    objects.map((obj, i) => (
      <>
        <ArtObject object={obj} />
      </>
    ));

  return <div className="App">{artObjects}</div>;
}

export default App;
