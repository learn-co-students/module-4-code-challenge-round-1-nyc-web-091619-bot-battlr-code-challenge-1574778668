import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import Search from '../components/Search'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    my_army: [],
    showingStats: false,
    showingBot: {},
    searchTerm: "",
    searchBots: [],
    filterValue: ""
  }


  componentDidMount(){
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(resp => resp.json())
    .then(bots => this.setState({ 
      bots: bots,
      searchBots: bots
    }))
  }

  addToArmy = bot => {
    if(!this.state.my_army.includes(bot)){
      this.setState({
        my_army: [...this.state.my_army, bot],
        showingStats: false,
        showingBot: {},
        searchTerm: "",
        bots: this.state.searchBots,
        filterValue: ""
      })
    }
  }

  removeFromArmy = unwanted_bot => {
    this.setState({
      my_army: this.state.my_army.filter(bot => bot !== unwanted_bot)
    })
  }

  showStats = bot => {
    this.setState({
      showingStats: true,
      showingBot: bot
    })
  }

  goBack = () => {
    this.setState({
      showingStats: false,
      showingBot: {},
      searchTerm: "",
      bots: this.state.searchBots,
      filterValue: ""
    })
  }

  search = e => {
    this.setState({
      searchTerm: e.target.value,
      bots: this.state.searchBots.filter(bot => bot.name.toLowerCase().includes(e.target.value.toLowerCase()))
    })
  }

  filter = e => {
    let filterVal
    switch (e.target.value) {
      case "Assault":
        filterVal = this.state.searchBots.filter(bot => bot.bot_class === "Assault")
        break;
      case "Support":
        filterVal = this.state.searchBots.filter(bot => bot.bot_class === "Support")
        break;
      case "Defender":
        filterVal = this.state.searchBots.filter(bot => bot.bot_class === "Defender")
        break;
      default:
        filterVal = this.state.searchBots
        break;
    }
    this.setState({
      bots: filterVal,
      filterValue: e.target.value
    })
  }


  render() {
    return (
      <div>
        <Search search={this.search} filter={this.filter} filterValue={this.state.filterValue} searchTerm={this.state.searchTerm} />
        <YourBotArmy bots={this.state.my_army} handleCardClick={this.removeFromArmy} />
        {this.state.showingStats 
        ? 
          <BotSpecs bot={this.state.showingBot} goBack={this.goBack} handleClick={this.addToArmy}/>
        :
          <BotCollection bots={this.state.bots}  handleCardClick={this.showStats}/>
        }
      </div>
    );
  }

}

export default BotsPage;
