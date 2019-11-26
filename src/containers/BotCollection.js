import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    const { bots, handleEnlisting } = this.props;
    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots
          {bots.map(bot => (
            <BotCard key={bot.id} bot={bot} handleEnlisting={handleEnlisting} />
          ))}
        </div>
      </div>
    );
  }
}

export default BotCollection;
