import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    my_army: []
  }


  componentDidMount(){
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(resp => resp.json())
    .then(bots => this.setState({ bots: bots}))
  }

  addToArmy = bot => {
    if(!this.state.my_army.includes(bot)){
      this.setState({
        my_army: [...this.state.my_army, bot]
      })
    }
  }

  removeFromArmy = unwanted_bot => {
    this.setState({
      my_army: this.state.my_army.filter(bot => bot !== unwanted_bot)
    })
  }


  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.my_army} handleCardClick={this.removeFromArmy} />
        <BotCollection bots={this.state.bots}  handleCardClick={this.addToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
