import React, { useState } from "react";

import ArtObject from "./ArtObject";
import useApi from "../../hooks/useApi";

function ArtObjectContainer() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const [{ data, isLoading, isError }, setUrl] = useApi("/api/objects?page=1", {
    hits: [],
    pageInfo: {},
  });

  const { hits, pageInfo } = data;

  return (
    <>
      <form
        onSubmit={(event) => {
          setUrl(`/api/objects?page=${page}&query=${query}`);
          event.preventDefault();
        }}
      >
        <button
          type="button"
          disabled={page === 1}
          onClick={() => {
            setPage((prevPage) => {
              setUrl(`/api/objects?page=${prevPage - 1}&query=${query}`);
              return prevPage - 1;
            });
          }}
        >
          Previous Page
        </button>
        <input
          type="number"
          value={page}
          min={1}
          max={pageInfo?.pages}
          onChange={(event) => {
            setPage(parseInt(event.target.value));
          }}
        />
        <input
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setPage(1);
          }}
        />
        <button
          type="button"
          disabled={page === pageInfo?.pages}
          onClick={() => {
            setPage((prevPage) => {
              setUrl(`/api/objects?page=${prevPage + 1}&query=${query}`);
              return prevPage + 1;
            });
          }}
        >
          {" "}
          Next Page
        </button>
        <button type="submit">Search</button>
      </form>

      {isError && <p>Something went wrong. Please try again. </p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="page-info">
            <p>
              Page {pageInfo?.page} of {pageInfo?.pages}
            </p>
            <p>{pageInfo?.totalrecords} total results found</p>
          </div>
          <ul>
            {hits.length &&
              hits.map((item) => (
                <li key={item.id}>
                  <ArtObject object={item} />
                </li>
              ))}
          </ul>
        </>
      )}
    </>
  );
}

export default ArtObjectContainer;
