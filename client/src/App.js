import React from "react";
import { useQuery } from "react-query";
import "./App.css";
import ArtObject from "./components/object/Object";

const getObjectUrl = (page) => `/api/objects?page=${page}`;

const getObjects = async ({ page }) => {
  try {
    const response = await fetch(`/api/objects?page=1`, {
      method: "GET",
    });

    const json = await response.json();

    if (response.error) throw new Error(response.error);

    return json;
  } catch (error) {
    throw new Error(error);
  }
};
function App() {
  const { isLoading, isError, data, error } = useQuery("objects", getObjects);
  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data: {error}</p>;
  }

  const artObjects =
    data &&
    data.length &&
    data.map((obj, i) => (
      <>
        <ArtObject object={obj} key={i} />
      </>
    ));

  return <div className="App">{artObjects}</div>;
}

export default App;
