import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  state = {
    botArmy: []
  }

  addBot = (bot) => {
      console.log(bot)
      // this.setState({
      //   botArmy: [...this.state.botArmy, bot]
      // })
  
  
    
    }


  render(){
    let bots = this.state.botArmy
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {bots.map(bot => (
              <BotCard bot={bot} addBot={this.addBot} />
            ))}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
