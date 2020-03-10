import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
//libreria para deinir el tiempo que ha pasado desde la creacion hasta el tiempo actual
import moment from "moment";

import styles from "./Message.css";

export default class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressFavorite: false,
      pressRetweet: false
    };

    this.onPressRetweet = this.onPressRetweet.bind(this);
    this.onPressFavorite = this.onPressFavorite.bind(this);
  }

  onPressRetweet() {
    this.props.onRetweet();
    this.setState({
      pressRetweet: true
    });
  }

  onPressFavorite() {
    this.props.onFavorite();
    this.setState({
      pressFavorite: true
    });
  }

  render() {
    let formatDate = moment(this.props.date).fromNow();
    let userLink = `/user/${this.props.userName}`;

    return (
      <Card className={styles.container}>
        <Card.Body>
          <div className={styles.userContent}>
            <Link to={userLink}>
              <div>
                <img className={styles.img} src={this.props.img} alt="" />
              </div>
            </Link>
            <div className={styles.name}>
              <span>{this.props.name}</span>
            </div>
            <div className={styles.user}>
              <span>{this.props.userName}</span>
            </div>
            <div className={styles.date}>
              <span>{formatDate}</span>
            </div>
          </div>
          <div className={styles.text}>
            <span>{this.props.text}</span>
          </div>
          <div className={styles.icons}>
            <div className={styles.icon} onClick={this.props.onReplyTweet}>
              <span className="fa fa-reply" />
            </div>
            <div
              className={`${this.state.pressRetweet ? styles.rtGreen : ""} 
              ${styles.icon}`}
              onClick={this.onPressRetweet}
            >
              <span className="fa fa-retweet" />
              <span>{this.props.numRetweets}</span>
            </div>
            <div
              // className={this.state.pressFavorite ? styles.favYellow : ""}
              className={`${this.state.pressFavorite ? styles.favYellow : ""} 
              ${styles.icon}`}
              onClick={this.onPressFavorite}
            >
              <span className="fa fa-star" />
              <span>{this.props.numFavorites}</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
