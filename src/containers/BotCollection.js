import React from "react";

import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	
	renderBotCollection = () => {
		let robots = this.props.bots
		return robots.map((robot, idx) => <BotCard key={idx} bot={robot} showHandler={this.props.showHandler}/>)
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
