import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here


	renderBot = () => {
	 return this.props.bots.map(bot => {
		 return <BotCard bot={bot}
						 key={bot.id}
						 addBot={this.props.addBot}
		 
		 />
	 })
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		 { this.renderBot()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
