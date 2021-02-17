import React, { useState } from "react";

import ArtObject from "./ArtObject";
import useApi from "../../hooks/useApi";
import classifications from "../../data/classifications.json";
import styles from "./ArtObjectContainer.module.css";

const createUrl = (page, query, mediumId) =>
  `/api/objects?page=${page || ""}&query=${query || ""}&classification=${
    mediumId || ""
  }`;

function ArtObjectContainer() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [mediumId, setMediumId] = useState("");

  const [{ data, isLoading, isError }, setUrl] = useApi("/api/objects?page=1", {
    hits: [],
    pageInfo: {},
  });

  const { hits, pageInfo } = data;

  return (
    <>
      <form
        className={styles.form}
        onSubmit={(event) => {
          setUrl(createUrl(page, query, mediumId));
          event.preventDefault();
        }}
      >
        <label className={styles.titleLabel} htmlFor="query">
          Title includes
        </label>
        <input
          className={styles.titleInput}
          type="text"
          name="query"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setPage(1);
          }}
        />

        <label className={styles.mediumLabel} htmlFor="classification-select">
          Medium
        </label>
        <select
          className={styles.mediumInput}
          name="classification-select"
          value={mediumId}
          onChange={(event) => {
            setMediumId(event.target.value);
            setPage(1);
          }}
        >
          <option value=""></option>
          {classifications.map((classification) => {
            return (
              <option
                value={classification.classificationid}
                key={classification.id}
              >
                {classification.name}
              </option>
            );
          })}
        </select>

        <label className={styles.pageLabel} htmlFor="page-number">
          Page
        </label>
        <input
          className={styles.pageInput}
          type="number"
          name="page-number"
          value={page}
          min={1}
          max={pageInfo?.pages}
          onChange={(event) => {
            setPage(parseInt(event.target.value));
          }}
        />

        <button className={styles.searchButton} type="submit">
          Search
        </button>

        <button
          className={styles.prevButton}
          type="button"
          disabled={page === 1}
          onClick={() => {
            setPage((prevPage) => {
              setUrl(createUrl(prevPage - 1, query, mediumId));
              return prevPage - 1;
            });
          }}
        >
          Previous Page
        </button>

        <button
          className={styles.nextButton}
          type="button"
          disabled={page === pageInfo?.pages}
          onClick={() => {
            setPage((prevPage) => {
              setUrl(createUrl(prevPage + 1, query, mediumId));
              return prevPage + 1;
            });
          }}
        >
          {" "}
          Next Page
        </button>
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
