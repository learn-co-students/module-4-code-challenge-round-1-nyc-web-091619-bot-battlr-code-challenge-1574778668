import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  renderBots = () => {
    return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} removeFromArmy={this.props.removeFromArmy}/>)
  }

  render(){
    console.log(this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
