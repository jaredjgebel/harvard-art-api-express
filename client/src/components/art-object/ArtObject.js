import React, { useState } from "react";

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
            <div>{object.century}</div>
            {infoVisible ? (
              <button
                onClick={() => {
                  setInfoVisible(false);
                }}
              >
                Back
              </button>
            ) : (
              <button onClick={() => setInfoVisible(true)}>More Info</button>
            )}
            <div>{object.classification}</div>
          </div>

          {infoVisible && (
            <div className={styles.modalContainer}>
              <div className={styles.modal}>
                <div className={styles.modalItem}>
                  <p>Title</p>
                  <span>{object.title}</span>
                </div>

                <div className={styles.modalItem}>
                  <p>Century</p>
                  <span>{object.century}</span>
                </div>

                <div className={styles.modalItem}>
                  <p>Classification</p>
                  <span>{object.classification}</span>
                </div>

                <div className={styles.modalItem}>
                  <p>Culture</p>
                  <span>{object.culture}</span>
                </div>

                <div className={styles.modalItem}>
                  <p>Dated</p>
                  <span>{object.dated}</span>
                </div>

                {object.technique && (
                  <div className={styles.modalItem}>
                    <p>Technique</p>
                    <span>{object.technique}</span>
                  </div>
                )}
              </div>
            </div>
          )}
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
