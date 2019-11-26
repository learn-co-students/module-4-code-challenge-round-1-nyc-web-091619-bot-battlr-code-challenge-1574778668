import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  renderBotCollection = () => {
		let robots = this.props.bots
		return robots.map((robot, idx) => <BotCard key={idx} bot={robot} showHandler={this.props.showHandler}/>)
	}

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotCollection()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
