import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class App extends Component {

  state = {
    allBots: []
  }

  componentWillMount() {
    fetch(API)
      .then(resp => resp.json())
      .then( bots => {
        this.setState({
          allBots: [...bots]
        })
      })
  }

  render() {

    // console.log(this.state.allBots)

    return (

      <div className="App">
        <BotsPage allBots={this.state.allBots} />
      </div>

    ); // end of return
  } // end of render
} // end of App

export default App;
