import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    const { army, handleDischarging } = this.props;
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {army.map(bot => (
              <BotCard
                key={bot.id}
                bot={bot[0]}
                isArmy={true}
                handleDischarging={handleDischarging}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
