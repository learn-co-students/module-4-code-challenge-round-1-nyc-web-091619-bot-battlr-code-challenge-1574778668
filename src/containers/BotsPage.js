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
          <BotSpecs
            bot={this.state.bot}
            handleEnlisting={this.handleEnlisting}
          />
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
  };

  handleEnlisting = clickedBot => {
    const bot = this.state.bots.filter(bot => bot.id === clickedBot.id);
    const army = [...this.state.army];
    army.push(bot);
    this.setState({ army: army, renderBot: false });
  };

  handleDischarging = bot => {
    const army = [...this.state.army];
    const index = army.indexOf(bot);
    army.splice(index, 1);
    this.setState({ army: army });
  };
}

export default BotsPage;
