import React from "react";
import ArmyBotCard from "../components/ArmyBotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/* {console.log("yourbotarmy props", this.props)} */}
            {this.props.myArmy.map((bot)=> {
              return <ArmyBotCard handleArmyClick={this.props.handleArmyClick} bot={bot}/>
            })}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
