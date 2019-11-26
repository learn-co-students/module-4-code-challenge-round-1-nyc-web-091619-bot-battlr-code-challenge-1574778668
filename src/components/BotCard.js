import React from "react";

const BotCard = props => {
  console.log(props)

  let botType;

  switch (props.bots.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.bots.id}
        onClick={props.addBots}
      >
        <div className="image">
          <img alt="oh no!" src={props.bots.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {props.bots.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{props.bots.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.bots.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.bots.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.bots.armor}
          </span>
        </div>
      </div>
    </div>
  );
  // return (
  //   <h1>hi</h1>
  // )
};

export default BotCard;
