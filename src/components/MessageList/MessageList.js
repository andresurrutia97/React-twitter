import React from "react";
import Message from "../Message/Message";

import styles from "./MessageList.css";

export default class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        {/* Se agrega el "index" ya que cada elemento debe tener una key para poderlo identificarlo */}
        {this.props.messages.map((msg, index) => {
          return (
            <Message
              key={index}
              text={msg.text}
              img={msg.img}
              name={msg.name}
              userName={msg.userName}
              date={msg.date}
              numRetweets={msg.retweets}
              numFavorites={msg.favorites}
              onRetweet={()=> this.props.onRetweet(index)}
              onFavorite={()=> this.props.onFavorite(index)}
              onReplyTweet={()=> this.props.onReplyTweet(index, msg.userName)}
            />
          );
          // la funcion reverse() revirte el orden del array
        }).reverse()}
      </div>
    );
  }
}
