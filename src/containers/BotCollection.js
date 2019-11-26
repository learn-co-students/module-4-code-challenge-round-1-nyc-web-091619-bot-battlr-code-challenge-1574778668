import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  botsRender = () => {
  return this.props.bots.map(bot => (<BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick} />))	  
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
          {this.botsRender()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
// Bots Map - with id and handleclick
// render - check google
