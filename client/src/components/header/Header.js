import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h1>Harvard Art Museums Search</h1>
      <h2>All images are the property of Harvard Art Museums</h2>
    </div>
  );
}

export default Header;
