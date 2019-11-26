import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from '../containers/YourBotArmy'

class BotsPage extends React.Component {
  
  state = {
    allBots: [],
    myBots: [],
    selectedBot: false,
    showBotSpecs: false
  }


  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(bots => this.setState({
        ...this.state,
        allBots: bots
      }))
      console.log(this.state)
  }

  renderMyBot = bot => {
    const randomBots = this.state.myBots.slice()
    if (this.state.myBots.includes(bot)) {
      randomBots.splice(randomBots.indexOf(bot), 1)
      this.setState({
        ...this.state,
        myBots: randomBots
      })
    } else {
      this.setState({
        ...this.state,
        showBotSpecs: true,
        selectedBot: true
      })
      
    }
  }
    

    handleClick=()=>{
      this.setState({
        ...this.state,
        showBotSpecs: false,
        selectedBot: false
      })
      }

  render() {
    console.log( this.state.myBots)
    console.log( this.state.allBots)
    return (
      <div>
      <YourBotArmy myBots={this.state.myBots} />
       <BotCollection allBots={this.state.allBots} handleClick={this.handleClick}/>
      </div>
      
    );
  }

}

export default BotsPage;
