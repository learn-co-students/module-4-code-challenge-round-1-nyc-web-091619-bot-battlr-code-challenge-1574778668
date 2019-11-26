import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  
	renderBots =() => {
		return this.props.allBots.map((bot) => {
			return <BotCard bot={bot} clickFunction={this.props.addBot} setClicked={this.props.setClicked} clicked={this.props.clicked} addBot={this.props.addBot} />
		})
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
