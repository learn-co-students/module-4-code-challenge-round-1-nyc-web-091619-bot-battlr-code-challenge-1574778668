import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  renderBots = () => {
    return this.props.bots.map((bot, id) => (
	  <BotCard 
	  key={id} 
	  bot={bot} 
	  handleClick={this.props.handleClick} 
	  />))
  }

    // once clicked need to disable from clicking again once in bot army collection

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
          {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection