// class BotsPage extends React.Component {
//   //start here with your code for step one

//   render() {
//     return (
//       <div>
//         {/* put your components here */}
//       </div>
//     );
//   }

// }
import React from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'

const BotsPage = props => {
  // console.log(props)
  return (
    <div>
      
        <YourBotArmy myBots={props.myBots} addBots={props.addBots}/>
        <BotCollection bots={props} myBots={props.myBots} addBots={props.addBots}/>
      
    </div>
  );
};

export default BotsPage;

