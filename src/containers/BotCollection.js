import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  {/* Collection of all bots */}
			  {this.props.bots.map((bot)=> {
				return <BotCard handleClick={this.props.handleClick} bot={bot}/>
			  })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
