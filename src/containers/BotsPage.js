import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

state = {
  robots: [],
  army: []
}

  addToArmy = (bot) => {
    if (this.state.army.find(armyBot => armyBot.id === bot.id)) return
    this.setState({ army: [...this.state.army, bot]  });
  }

  removeFromArmy = (bot) => {
    this.setState({ army: this.state.army.filter(armyBot => armyBot.id !== bot.id)  });
  }

  componentDidMount() {
    fetch(API).then(res =>res.json()).then(robots => this.setState({ robots: robots  }))
  }

  //showState = () => (console.log(this.state.robots))
  

  render() {
   // this.showState()
    return (
      <div>
        <YourBotArmy bots={this.state.army} removeFromArmy={this.removeFromArmy}/>
        <BotCollection robots={this.state.robots} addToArmy={this.addToArmy} />
      </div>
    );
  }

}

export default BotsPage;
