import React from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'
import BotCard from '../components/BotCard'



class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    chosenBots: []
  }

  renderBots(bots) {
    bots.map(bot => {
      return <BotCard bot={bot} />
      })
  }

  botRecruiter = () => {
    this.setState({
      chosenBots: [...this.state.chosenBots]
    }),
    console.log('clicking a bot')
  }

  render() {

    // console.log(this.props)
    // console.log(this.state.chosenBots)

    return (

      <div>
        
          <YourBotArmy renderBots={this.renderBots} chosenBots={this.state.chosenBots} />
          <BotCollection botRecruiter={this.botRecruiter} renderBots={this.renderBots} allBots= {this.props.allBots} />
        
      </div>
    );
  }

}

export default BotsPage;
