import React, { useState } from "react";

import ArtObject from "./ArtObject";
import useApi from "../../hooks/useApi";

function ArtObjectContainer() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const [{ data, isLoading, isError }, setUrl] = useApi("/api/objects?page=1", {
    hits: [],
  });

  return (
    <>
      <form
        onSubmit={(event) => {
          setUrl(`/api/objects?page=${page}&query=${query}`);
          event.preventDefault();
        }}
      >
        <input
          type="number"
          value={page}
          onChange={(event) => {
            setPage(event.target.value);
          }}
        />
        <input
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>

      {isError && <p>Something went wrong. Please try again. </p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.hits.map((item) => (
            <li key={item.id}>
              <ArtObject object={item} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ArtObjectContainer;
