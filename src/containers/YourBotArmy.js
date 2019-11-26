import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  handleClick = (event) =>{event.preventDefault()}
  botsRender = (yourBots) => {
    // console.log(yourBots)
    return yourBots.map(bot =>(<BotCard bot={bot} handleClick={this.handleClick}/>))
  }


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.botsRender(this.props.yourBots)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};
export default YourBotArmy;
// handleClick 
// BotsRender
// Bots Map
// console.log to check
// show and hide each card 
// render in div - using props