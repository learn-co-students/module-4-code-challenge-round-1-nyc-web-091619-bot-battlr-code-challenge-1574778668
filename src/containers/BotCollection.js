import React from "react";
import BotCard from "../components/BotCard";

// class BotCollection extends React.Component {
//   //your code here

//   render(){
//   	return (
//   	  <div className="ui four column grid">
//     		<div className="row">
//     		  {/*...and here..*/}
//     		  Collection of all bots
//     		</div>
//   	  </div>
//   	);
//   }

// };


const BotCollection = props => {
	// console.log(props.addBots)
	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {props.bots.bots.map(bot=>{
				  return <BotCard key={bot.id} bots={bot} myBots={props.myBots} addBots={props.addBots}/>
			  })
			}
		</div>
  	  </div>
  	);
}

export default BotCollection;
