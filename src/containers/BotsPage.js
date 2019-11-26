import React from "react";

import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    robots: [],
    yourRobots: [],
    showView: false,
    showBot: {},
  }

  enlistOrDischargeRobot = (bot) => {
    bot.inArmy = !bot.inArmy
    this.setState(prevState => (
      {
        yourRobots: prevState.robots.filter(robot => {
          return robot.inArmy
        }),
        showView: false,
      }
    ))
  }

  showHandler = bot => {

    this.setState(prevState => (
      {
      showView: !prevState.showView,
      showBot: bot
      }
     )
    )
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
        <YourBotArmy bots={this.state.yourRobots} showHandler={this.showHandler}/>
        {/* Need to conditionally render BotCollection depending on some state */}
        {
          this.state.showView ? 
          <BotSpecs bot={this.state.showBot} showHandler={this.showHandler} enlistOrDischargeRobot={this.enlistOrDischargeRobot}/> :
          <BotCollection bots={this.state.robots} showHandler={this.showHandler} />

        }
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
