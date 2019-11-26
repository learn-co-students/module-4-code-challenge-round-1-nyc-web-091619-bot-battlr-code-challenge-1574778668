import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  renderBots = (yourBots) => {
    return yourBots.map((bot, index) => 
    (<BotCard 
      key={index}
      bot={bot} 
      handleClick={this.handleClick}
      />
    ))
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.renderBots(this.props.yourBots)}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;