import React, { Component } from "react";
import styles from "./Profile.css";

export default class Profile extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.avatar} src={this.props.picture} />
        <span className={styles.name}>{this.props.displayName}</span>
        <ul className={styles.data}>
          <li>
            <span className="fa fa-user" />
            <span className={styles.text}>{this.props.userName}</span>
          </li>
          <li>
            <span className="fa fa-envelope" />
            <span className={styles.text}>{this.props.email}</span>
          </li>
          <li>
            <span className="fa fa-map-marker" />
            <span className={styles.text}>{(this.props.location) ? this.props.location : this.props.id}</span>
          </li>
        </ul>
      </div>
    );
  }
}
