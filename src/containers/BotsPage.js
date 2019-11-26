import React from "react";
import BotCollection from '../containers/BotCollection';
import YourBotArmy from '../containers/YourBotArmy';

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botArmy: []
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then (resp => resp.json())
    .then(data =>
        this.setState({
          bots: data
        }))
    
  }

  addBot = (bot) => {
      console.log(bot)
      //add to botArmy[]
      //setState
  }



  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots}
                       addBot={this.addBot}/>

        <YourBotArmy botArmy={this.state.botArmy}/>
      </div>
    );
  }

}

export default BotsPage;
