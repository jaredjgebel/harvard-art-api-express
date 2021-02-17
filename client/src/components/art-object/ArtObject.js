import React from "react";
import styles from "./ArtObject.module.css";

const ArtObject = ({ object }) => (
  <>
    <a
      className={styles.url}
      href={object.url}
      target="_blank"
      rel="noreferrer"
    >
      <h2 className={styles.title}>{object.title}</h2>
    </a>
    <div className={styles.info}>
      <div>{object.century}</div>
      <div>{object.classification}</div>
    </div>
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        src={object.primaryimageurl}
        alt={object.title}
      />
    </div>
    <p className={styles.credit}>{object.creditline}</p>
  </>
);

export default ArtObject;
