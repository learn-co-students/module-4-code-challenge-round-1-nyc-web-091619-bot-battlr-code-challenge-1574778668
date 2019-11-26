import React from "react";
import BotCollection from './BotCollection' //ok
import YourBotArmy from './YourBotArmy' //ok

//parent

class BotsPage extends React.Component {

  state = {
    // id: id,
    bots: [],
    yourBots: []
   }

  //fetch
  componentWillMount(){
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  setBots = (bot) => {
    this.setState((prevState)=> {
      const newBots = prevState.yourBots.push(bot)
      return {yourbots: newBots}
    })
  }


  render() {
    return (
      <div>
        <YourBotArmy 
        yourBots={this.state.yourBots} 
        />

        <BotCollection 
        bots={this.state.bots} 
        handleClick={this.setBots}
        />
      </div>
    );
  }

}

export default BotsPage

