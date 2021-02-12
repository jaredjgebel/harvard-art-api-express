import React, { useState, useEffect } from "react";
import axios from "axios";

import ArtObject from "./ArtObject";
import useGetObjects from "../../hooks/useGetObjects";

function ArtObjectContainer() {
  const [data, setData] = useState({ hits: [] });
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("/api/objects?page=1");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      console.log("result", result);
      setData({ hits: result.data });
    };

    fetchData();
  }, [url]);

  return (
    <>
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
      <button
        type="button"
        onClick={() => setUrl(`/api/objects?page=${page}&query=${query}`)}
      >
        Search
      </button>
      <ul>
        {data.hits.map((item) => (
          <li key={item.id}>
            <ArtObject object={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ArtObjectContainer;
