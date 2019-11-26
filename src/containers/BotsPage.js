import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
const URL = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {

  state ={
    bots: [],
    army: []
  }

  addToArmy = (bot) => {
    if(this.state.army.find(aBot => aBot.id === bot.id) === undefined){
      this.setState({
        army: [
          ...this.state.army,
          {...bot}
        ]
      })
    }else{
      alert("That bot is already in your army, silly!")
    }
    
  }

  removeFromArmy = (removeBot) => {
    let newArmy = this.state.army.filter(bot=> bot.id !== removeBot.id)
    this.setState({
      army: [...newArmy]
    })
  }
  
  componentDidMount(){
    fetch(URL)
    .then(resp=> resp.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.army} removeFromArmy={this.removeFromArmy}/>
        <BotCollection addToArmy={this.addToArmy} bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
