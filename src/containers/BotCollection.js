import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {

	state = {
		currentBot: null,
		searchTerm: "",
		bot_class: "all"
	}
  
	// Renders a list of BotCard components with mainClickHandler set to this.showSpecs 
	// Before rendering, it checks and filters based on the search term & class filter
	renderBots = () => {
		let filteredBots = this.props.bots.filter(bot => bot.name.toLowerCase().includes(this.state.searchTerm))
		if(this.state.bot_class !== "all"){
			filteredBots = filteredBots.filter(bot => bot.bot_class === this.state.bot_class)
		}
		return filteredBots.map(bot=> {
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
			currentBot: null,
			searchTerm: "",
			botClass: "all"
		})
	}

	handleSearch = (e) =>{
		this.setState({
			searchTerm: e.target.value.toLowerCase()
		})
	}

	handleBotClass = (e) =>{
		this.setState({
			bot_class: e.target.value
		})
	}

	// Conditionally renders either just one spec card of the currentBot, or all bots
	// With all bots, also renders a text box to search by name, and a drop-down to filter by class
	render(){
		return(
			<div>
				{this.state.currentBot?
					<BotSpecs bot={this.state.currentBot} addToArmy={this.props.addToArmy} goBack={this.goBack}/>
				:
					<div>
						<div>
							<br></br>
							<input onChange={this.handleSearch} type="text" placeholder="Search by name"/>
							<br></br>
							<label>Filter by Class</label>
							<select onChange={this.handleBotClass}>
								<option value="all">All</option>
								<option value="Assault">Assault</option>
								<option value="Defender">Defender</option>
								<option value="Support">Support</option>
							</select>
						</div>
						<br></br><br></br>
						<div className="ui four column grid">
							<h1>All Bots</h1>
							<div className="row">
							{this.renderBots()}
							</div>
						</div>
					</div>
				}
			</div>	
		)	
	}

};

export default BotCollection;
