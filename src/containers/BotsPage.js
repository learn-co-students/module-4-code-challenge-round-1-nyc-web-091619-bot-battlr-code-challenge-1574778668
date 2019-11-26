import React from "react";

import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    robots: [],
    yourRobots: []
  }

  enlistOrDischargeRobot = (bot) => {
    bot.inArmy = !bot.inArmy
    this.setState(prevState => (
      {
        yourRobots: prevState.robots.filter(robot => {
          return robot.inArmy
        })
      }
    ))
  }

  fetchRobos = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(data => this.setState({
        robots: data
      }))
  }
  
  componentDidMount() {
    this.fetchRobos()
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.yourRobots} enlistOrDischargeRobot={this.enlistOrDischargeRobot}/>
        <BotCollection bots={this.state.robots} enlistOrDischargeRobot={this.enlistOrDischargeRobot}/>
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
