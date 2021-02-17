import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h1>Harvard Art Museums API Search</h1>
    </div>
  );
}

export default Header;
