import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
class BotsPage extends React.Component {
  
  state = {
    bots: []
  }

  // handleClick(e) {
  //   e.preventDefault()
  //   console.log('Click happened', e.target.value);
  // }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(bots => {
      this.setState({
        bots: bots
      })
    })
  }

  render() {
    let bots = this.state.bots
    return (
      <div>
          <YourBotArmy />
          <BotCollection key={bots.id} bots={bots} />
      </div>
    );
  }

}

export default BotsPage;
