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

        {object.century && (
          <div className={styles.modalItem}>
            <p>Century</p>
            <span>{object.century}</span>
          </div>
        )}

        {object.classification && (
          <div className={styles.modalItem}>
            <p>Classification</p>
            <span>{object.classification}</span>
          </div>
        )}

        {object.culture && (
          <div className={styles.modalItem}>
            <p>Culture</p>
            <span>{object.culture}</span>
          </div>
        )}

        {object.dated && (
          <div className={styles.modalItem}>
            <p>Dated</p>
            <span>{object.dated}</span>
          </div>
        )}

        {object.technique && (
          <div className={styles.modalItem}>
            <p>Technique</p>
            <span>{object.technique}</span>
          </div>
        )}

        {object.background && (
          <div className={styles.modalItem}>
            <p>Background</p>
            <span>{object.labeltext}</span>
          </div>
        )}

        {object.department && (
          <div className={styles.modalItem}>
            <p>Department</p>
            <span>{object.department}</span>
          </div>
        )}

        {object.medium && (
          <div className={styles.modalItem}>
            <p>Medium</p>
            <span>{object.medium}</span>
          </div>
        )}

        {object.period && (
          <div className={styles.modalItem}>
            <p>Period</p>
            <span>{object.period}</span>
          </div>
        )}

        {object.people?.length && (
          <div className={styles.modalItem}>
            <p>People</p>
            {object.people.map((person) => (
              <span className={styles.modalSpan} key={object.id}>
                {person.name}, {person.role} <br />
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
