import React, { useState } from "react";

import { useQuery } from "react-query";
import ArtObject from "./ArtObject";

// const getObjectUrl = (page) => `/api/objects?page=${page}`;

const getObjects = async ({ queryKey }) => {
  const page = queryKey[1];

  try {
    const response = await fetch(`/api/objects?page=${page}`, {
      method: "GET",
    });

    const json = await response.json();

    if (response.error) throw new Error(response.error);

    return json;
  } catch (error) {
    throw new Error(error);
  }
};

function ArtObjectContainer() {
  const [page, setPage] = useState(1);

  const { isLoading, isError, data, error } = useQuery(
    ["objects", page],
    getObjects
  );

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
      <div key={i}>
        <ArtObject object={obj} />
      </div>
    ));

  return (
    <div className="App">
      <button onClick={() => setPage(page + 1)}>Next Page</button>
      {artObjects}
    </div>
  );
}

export default ArtObjectContainer;
