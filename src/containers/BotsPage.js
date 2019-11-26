import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: [],
    renderBot: false,
    bot: []
  };

  componentDidMount() {
    this.getBots();
  }

  render() {
    return (
      <div>
        <YourBotArmy
          army={this.state.army}
          handleDischarging={this.handleDischarging}
        />
        {this.state.renderBot === true ? (
          <BotSpecs bot={this.state.bot} />
        ) : (
          <BotCollection
            bots={this.state.bots}
            handleBotShowPage={this.handleBotShowPage}
          />
        )}
      </div>
    );
  }

  getBots = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ bots: data });
      });
  };

  handleBotShowPage = bot => {
    console.log("show page");
    const renderBot = true;
    this.setState({ renderBot: renderBot, bot: bot });
    // when a bot is clicked, clear the 'bots' state and add in our selected bot
    // create a condition in our render method, that if 'bots' state === 1, render a show page
    //  otherwise, render the BotsCollection
  };

  handleEnlisting = clickedBot => {
    const bot = this.state.bots.filter(bot => bot.id === clickedBot.id);
    const army = [...this.state.army];
    army.push(bot);
    this.setState({ army: army });
  };

  handleDischarging = bot => {
    const army = [...this.state.army];
    const index = army.indexOf(bot);
    army.splice(index, 1);
    this.setState({ army: army });
  };
}

export default BotsPage;
