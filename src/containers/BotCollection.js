import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  renderRobots = () => {
	  return this.props.robots.map(bot => <BotCard key={bot.id} bot={bot} addToArmy={this.props.addToArmy} showTheBot={this.props.showTheBot}/>)
  }

  render(){
	  
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderRobots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
