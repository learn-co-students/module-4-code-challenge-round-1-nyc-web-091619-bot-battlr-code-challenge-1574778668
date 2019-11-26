import React, { Component } from "react";

class ArmyBotCard extends Component {
  state = {};
  render() {
    return <div> {console.log(this.props.bot[0])} </div>;
  }
}

export default ArmyBotCard;
