import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

let clickedBot = null

class BotsPage extends React.Component {
  
  state = {
    bots: [],
    enlisted: [],
    clickedBot
  }
  
  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(data => {
      this.setState({bots: data})
    })
  }

  enlistHandler = (event) => {
    let botID = event.target.id
    clickedBot = this.state.bots.find(bot => bot.id == botID)
    let removingBot = this.state.enlisted.find(bot => bot.id == botID)
    
    if (this.state.bots.includes(clickedBot)){
      console.log("clicked: ", clickedBot)
      let newBots = [...this.state.bots]
      for(let i = 0; i < newBots.length; i++){ 
        if ( newBots[i].id == botID) {
          newBots.splice(i, 1); 
        }
      }
      this.setState({bots: newBots, enlisted: [...this.state.enlisted, clickedBot]})
    } else if (this.state.enlisted.includes(removingBot)){
      console.log("removing: ", removingBot)
      let newEnlisted = [...this.state.enlisted]
      for(let i = 0; i < newEnlisted.length; i++){ 
        if ( newEnlisted[i].id == botID) {
          newEnlisted.splice(i, 1); 
        }
      }
      this.setState({bots: [...this.state.bots, removingBot], enlisted: newEnlisted})
    }

  }

  renderBot = () => {
    if (clickedBot) {
      return <BotSpecs bot = {clickedBot} goBackButton = {this.goBackButton}/>
    } else {
      return <BotCollection 
              bots = {this.state.bots}
              enlistHandler = {this.enlistHandler} />
    }
  }

  goBackButton = () => {
    clickedBot = null
    this.render()
  }

  render() {
    console.log("current state: ", this.state)
    return (
      <div>
        {
        <div>
          <YourBotArmy 
            enlisted = {this.state.enlisted} 
            enlistHandler = {this.enlistHandler} />
          {this.renderBot()}
        </div>
        }
      </div>
    );
  }

}

export default BotsPage;
