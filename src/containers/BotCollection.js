import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
  //your code here

  renderBotCards = () => {
	  return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} handleClick={this.props.viewSpecs} />)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				{this.renderBotCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
