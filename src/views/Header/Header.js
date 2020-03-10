import React from "react";
import styles from "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.root}>
        <h1 className=""> uruTwitter </h1>
      </header>
    );
  }
}
