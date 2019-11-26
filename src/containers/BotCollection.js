import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  
	renderBots = () => {
		return this.props.bots.map(bot=> <BotCard clickHandler={this.props.addToArmy} bot={bot} key={bot.id}/>)
	}

	render(){
		return (
		<div className="ui four column grid">
			<h1>All Bots</h1>
			<div className="row">
			{this.renderBots()}
			</div>
		</div>
		);
	}

};

export default BotCollection;
