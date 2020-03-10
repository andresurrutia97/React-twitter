import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";

import Header from "./views/Header/Header";
import Main from "./views/Main/Main";
import Profile from "./views/Profile/Profile";

// const Main2 = Loadable({
//   loader: () => import("./views/Main/Main"),
//   loading
// });
class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        photoURL:
          "https://pbs.twimg.com/profile_images/698964696800608256/eCo6fbih_400x400.jpg",
        email: "andpipeus97@gmail.com",
        displayName: "Andres F. Urrutia",
        location: "Cali, Colombia"
        // onOpenText: false
      }
    };
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              name="Home"
              component={() => {
                if (this.state.user) {
                  return <Main user={this.state.user} />;
                } else {
                  //login
                }
              }}
            />
            <Route
              exact
              path="/profile"
              name="Profile"
              component={() => {
                return (
                  <Profile
                    picture={this.state.user.photoURL}
                    userName={this.state.user.email.split("@")[0]}
                    displayName={this.state.user.displayName}
                    location={this.state.user.location}
                    email={this.state.user.email}
                  />
                );
              }}  
            />
            <Route
              exact
              path="/user/:username"
              name="UsersProfile"
              component={({match}) => {
                return (
                  <Profile
                    userName={match.params.username}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
