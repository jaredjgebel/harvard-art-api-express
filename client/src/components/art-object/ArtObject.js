import React from "react";
import styles from "./ArtObject.module.css";

const ArtObject = ({ object }) => (
  <>
    <p>{object.title}</p>
    <img
      className={styles.image}
      src={object.primaryimageurl}
      alt={object.title}
    />
    <p>{object.century}</p>
    <p>{object.classification}</p>
    <p>{object.creditline}</p>
    <p>{object.url}</p>
  </>
);

export default ArtObject;
