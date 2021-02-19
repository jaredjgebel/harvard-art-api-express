import React, { useState } from "react";

import Modal from "../modal/Modal";
import styles from "./ArtObject.module.css";

const ArtObject = ({ object }) => {
  const [infoVisible, setInfoVisible] = useState(false);

  return (
    <>
      <div className={styles.artObjectContainer}>
        <div className={styles.artObjectContents}>
          <a
            className={styles.url}
            href={object.url}
            target="_blank"
            rel="noreferrer"
          >
            <h2 className={styles.title}>{object.title}</h2>
          </a>

          <div className={styles.info}>
            <div className={styles.infoItem}>{object.century}</div>
            {infoVisible ? (
              <button
                className={styles.infoItem}
                onClick={() => {
                  setInfoVisible(false);
                }}
              >
                Back
              </button>
            ) : (
              <button
                className={styles.infoItem}
                onClick={() => setInfoVisible(true)}
              >
                More Info
              </button>
            )}
            <div className={styles.infoItem}>{object.classification}</div>
          </div>

          {infoVisible && <Modal object={object} />}

          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={object.primaryimageurl}
              alt={object.title}
            />
          </div>
          <p className={styles.credit}>{object.creditline}</p>
        </div>
      </div>
    </>
  );
};

export default ArtObject;
