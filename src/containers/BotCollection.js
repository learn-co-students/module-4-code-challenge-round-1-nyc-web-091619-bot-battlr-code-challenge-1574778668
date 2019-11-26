import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){

	// console.log(this.props.botRecruiter)

  	return (

  	  <div className="ui four column grid">
    		<div className="row">
    		  <p>Collection of all bots</p>
    		  {
				  this.props.allBots.map(bot => {
					return <BotCard botRecruiter={this.props.botRecruiter} bot={bot} />
				  })
				// this.props.renderBots(this.props.allBots)
			  }
    		</div>
  	  </div>

  	);
  }

};

export default BotCollection;
