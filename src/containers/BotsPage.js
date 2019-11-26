import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
class BotsPage extends React.Component {

  state = {
    bots: [],
    yourBots: []
  }

  componentWillMount(){
    fetch( `https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  setYourBots = (bot) => {
    this.setState((prevState)=> {
      const newBots = prevState.yourBots.push(bot)
      return {yourbots: newBots}
      // console.log(this.props.yourBots)
    })
    // console.log(this.state.yourBots)
  }

  render() {
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots} />
        <BotCollection bots={this.state.bots} handleClick={this.setYourBots}/>

      </div>
    );
  }

}

export default BotsPage;

// Set State
// ComponentWillMount - fetch - this.setState
// setYourBots - use prevstate
// Render - by this.state
