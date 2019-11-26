import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  renderMyBots =() => {
		return this.props.myBots.map((bot) => {
			return <BotCard {...bot} clickFunction={this.props.removeBot} />
		})
	}

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderMyBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
