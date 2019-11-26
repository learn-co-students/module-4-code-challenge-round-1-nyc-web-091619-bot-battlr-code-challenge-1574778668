import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  
	// removeBot = (bot) => {
	// 	  this.setState({
	// 	    bots: props 
	// 	  })
	// 	}

  render(){
	  let bots = this.props.bots
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				{bots.map(bot => (
    		  		<BotCard key={bot.id} bot={bot} />
				))}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
