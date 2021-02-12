import React, { useState, useEffect } from "react";
import axios from "axios";

import ArtObject from "./ArtObject";

function ArtObjectContainer() {
  const [data, setData] = useState({ hits: [] });
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("/api/objects?page=1");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);
        console.log("result", result);

        setData({ hits: result.data });
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

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
