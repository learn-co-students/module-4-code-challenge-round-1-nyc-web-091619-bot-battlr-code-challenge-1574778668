import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    userBots: [],
    viewingSpecs: false,
    bot: null
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(json => {
      this.setState({ bots: json })
    })
  }

  enlistBot = (bot) => {
    if (!this.state.userBots.find(b => b.id === bot.id)) {
      this.setState({ userBots: [...this.state.userBots, bot ] })
    }
  }

  dischargeBot = (bot) => {
    this.setState({ userBots: this.state.userBots.filter(b => b.id !== bot.id) })
  }

  viewSpecs = (bot) => {
    this.setState({
      viewingSpecs: true,
      bot: bot
    })
  }
  
  hideSpecsView = () => {
    this.setState({
      viewingSpecs: false
    })
  }

  enlistAndReturn = (bot) => {
    this.setState({
      viewingSpecs: false
    }, this.enlistBot(bot))
  }

  render() {
    return (
      <div>
          <YourBotArmy bots={this.state.userBots} dischargeBot={this.dischargeBot} />
          {this.state.viewingSpecs
            ?
            <BotSpecs bot={this.state.bot} enlist={this.enlistAndReturn} goBack={this.hideSpecsView} />
            :
            <BotCollection bots={this.state.bots} enlistBot={this.enlistBot} viewSpecs={this.viewSpecs} />
          }
      </div>
    );
  }

}

export default BotsPage;
