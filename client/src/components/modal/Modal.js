import React from "react";

import styles from "./Modal.module.css";

function Modal({ object }) {
  return (
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
  );
}

export default Modal;
