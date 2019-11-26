import React from "react";
import BotSpecs from "./BotSpecs"


// I should change this to a class? save state here and 

const BotCard = props => {
  
  const { bot } = props;

  let botType;


  let clickHandler = (e) => {
  
    props.setClicked()

    // props.clickFunction(props)

  }


  // let renderSpec  = (bot) => {
  //   props.allBots.filter(bot)
  // }

  switch (bot.bot_class) {
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
    props.clicked?  
    // conditional rendering based on state of card held in Bot collection 
      <BotSpecs bot={bot} addBot={props.addBot}/>
        : 
      <div className="ui column">
        <div
          className="ui card"
          key={bot.id}
          onClick={clickHandler}
        >
          <div className="image">
            <img alt="oh no!" src={bot.avatar_url} />
          </div>
          <div className="content">
            <div className="header">
              {bot.name} {botType}
            </div>

            <div className="meta text-wrap">
              <small>{bot.catchphrase}</small>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat" />
              {bot.health}
            </span>

            <span>
              <i className="icon lightning" />
              {bot.damage}
            </span>
            <span>
              <i className="icon shield" />
              {bot.armor}
            </span>
          </div>
        </div>
      </div> 
        


  );

};

export default BotCard;
