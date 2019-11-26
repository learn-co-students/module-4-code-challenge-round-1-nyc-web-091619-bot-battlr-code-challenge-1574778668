import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
 
  // Renders a list of bots with mainClickHandler set to removeFromArmy from BotsPage
  renderBots = () => {
    return this.props.bots.map(bot => <BotCard mainClickHandler={this.props.removeFromArmy} bot={bot} key={bot.id}/>)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            <h1>Your Bot Army</h1>
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
