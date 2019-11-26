import React from "react";

import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	
	renderBotCollection = () => {
		let robots = this.props.bots
		return robots.map((robot, idx) => <BotCard key={idx} bot={robot} enlistOrDischargeRobot={this.props.enlistOrDischargeRobot}/>)
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
					{this.renderBotCollection()}
				</div>
  	  </div>
  	);
  }

};

export default BotCollection;
