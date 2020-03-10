import React from "react";
import "./Main.css";

import MessageList from "../../components/MessageList/MessageList";
import ProfileBar from "../../components/ProfileBar/ProfileBar";
import InputText from "../../components/InputText/InputText";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: Object.assign(
        {},
        this.props.user,
        { retweets: [] },
        { favorites: [] }
      ),
      openText: false,
      userNameToReply: "",
      messages: [
        {
          text: "Tengo hambre!!",
          img:
            "https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png",
          name: "Vanessa Velasquez",
          userName: "Pulguita13",
          date: Date.now(),
          retweets: 0,
          favorites: 0
        },
        {
          text: "KFC 4 ever",
          img:
            "https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png",
          name: "Pepito Perez",
          userName: "pepe97",
          date: Date.now(),
          retweets: 0,
          favorites: 0
        }
      ]
    };
    //sirve para enlazar el "this" correcto al contexto de la funcion
    this.handleOpenText = this.handleOpenText.bind(this);
    this.handleSendText = this.handleSendText.bind(this);
    this.handleCloseText = this.handleCloseText.bind(this);
    this.handleRetweet = this.handleRetweet.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleReplyTweet = this.handleReplyTweet.bind(this);
  }

  handleOpenText(event) {
    event.preventDefault();
    this.setState({ openText: true });
  }

  handleSendText(event) {
    event.preventDefault();
    let newMessage = {
      text: event.target.text.value,
      img: this.props.user.photoURL,
      name: this.props.user.displayName,
      userName: this.props.user.email.split("@")[0],
      date: Date.now(),
      retweets: 0,
      favorites: 0
    };
    console.log(newMessage);
    this.setState({
      messages: this.state.messages.concat([newMessage]),
      openText: false
    });
  }

  handleCloseText(event) {
    event.preventDefault();
    this.setState({ openText: false });
  }

  handleRetweet(id) {
    let alreadyRetweeted = this.state.user.retweets.filter(rt => rt == id);
    if (alreadyRetweeted.length == 0) {
      let messages = this.state.messages.map((msg, index) => {
        if (index == id) {
          msg.retweets++;
        }
        return msg;
      });

      let user = Object.assign({}, this.state.user);
      user.retweets.push(id);

      this.setState({
        messages,
        user
      });
    }
  }

  handleReplyTweet(id, userNameToReply) {
    this.setState({
      openText: true,
      userNameToReply
    });
  }

  handleFavorite(id) {
    let alreadyFavorited = this.state.user.favorites.filter(fav => fav == id);
    if (alreadyFavorited.length == 0) {
      let messages = this.state.messages.map((msg, index) => {
        if (index == id) {
          msg.favorites++;
        }
        return msg;
      });

      let user = Object.assign({}, this.state.user);
      user.favorites.push(id);

      this.setState({
        messages,
        user
      });
    }
  }

  //comprobar si el estado tiene opentext en true y si es asi devuelve un input text
  renderOpenText() {
    if (this.state.openText) {
      return (
        <InputText
          onSendText={this.handleSendText}
          onCloseText={this.handleCloseText}
          userNameToReply={this.state.userNameToReply}
        />
      );
    }
  }

  render() {
    return (
      <div>
        <ProfileBar
          picture={this.props.user.photoURL}
          username={this.props.user.email.split("@")[0]}
          onOpenText={this.handleOpenText}
        />
        {this.renderOpenText()}
        <MessageList
          messages={this.state.messages}
          onRetweet={this.handleRetweet}
          onFavorite={this.handleFavorite}
          onReplyTweet={this.handleReplyTweet}
        />
      </div>
    );
  }
}
