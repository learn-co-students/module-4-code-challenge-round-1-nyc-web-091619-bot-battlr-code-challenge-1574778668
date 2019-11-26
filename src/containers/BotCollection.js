import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {

	state = {
		currentBot: null
	}
  
	// Renders a list of BotCard components with mainClickHandler set to this.showSpecs 
	renderBots = () => {
		return this.props.bots.map(bot=> {
			return <BotCard mainClickHandler={this.showSpecs} bot={bot} key={bot.id}/>
		})
	}

	// Sets the state of current bot to the given bot, thus 
	// affecting the conditional render below to show just this spec card
	showSpecs = (bot) =>{
		this.setState({
			currentBot: {...bot}
		})
	}

	// Sets state of currentBot to null in to affect the conditional render
	// to show all the bots
	goBack = () => {
		this.setState({
			currentBot: null
		})
	}

	// Conditionally renders either just one spec card of the currentBot, or all bots
	render(){
		return(
			<div>
				{this.state.currentBot?
					<BotSpecs bot={this.state.currentBot} addToArmy={this.props.addToArmy} goBack={this.goBack}/>
				:
					<div className="ui four column grid">
						<h1>All Bots</h1>
						<div className="row">
						{this.renderBots()}
						</div>
					</div>
				}
			</div>	
		)	
	}

};

export default BotCollection;
