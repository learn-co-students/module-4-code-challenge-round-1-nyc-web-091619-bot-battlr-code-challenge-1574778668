import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  state={
    bots: [],
    myBots: [],
    enlisted: false
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp=>resp.json())
    .then(bots=>this.setState({bots: bots}))
  }

  addBots = (e)=>{
    console.log(e.target.parentNode.parentNode)
    let id = this.state.myBots.map(bot=>bot.id)
    if (!id.includes(e.target.id)){
     e.target.parentNode.parentNode.remove()
     this.setState({myBots: [...this.state.myBots, e.target.parentNode.parentNode]})
    }
    // e.target.parentNode.parentNode.remove()
  }

  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} myBots={this.state.myBots} addBots={this.addBots}/>
      </div>
    );
  }
}

export default App;
