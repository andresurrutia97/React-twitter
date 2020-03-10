import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./ProfileBar.css";

export default class ProfileBar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={styles.container}>
        <Link to="/profile">
          <div>
            <img className={styles.img} src={this.props.picture} alt="" />
          </div>
        </Link>
        <span className={styles.userName}>Hola @{this.props.username}!</span>
        <Button onClick={this.props.onOpenText}>
          <span className="fa fa-edit" /> tweet
        </Button>
      </div>
    );
  }
}
