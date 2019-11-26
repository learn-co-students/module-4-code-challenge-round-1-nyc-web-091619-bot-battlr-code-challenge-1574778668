import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    myArmy: [],
    showView: false
  }
  
  
  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then (resp => resp.json())
      .then (data => 
        this.setState({
          bots: data
      })
    )
  }

  handleClick = (event, bot)=> {
    // event.persist()
    // console.log(event);
    // this.state.myArmy.push(bot)

    console.log(this.state.bots)
    this.setState({
      showView: true
    })

    // if (this.state.myArmy.find((b) => b.id === bot.id)) {
    //   alert("Can only have one of these in the army!")
    //   return;
    // }
    // this.setState({
    //   myArmy: [...this.state.myArmy, bot]
    // })
    // console.log(this.state.myArmy)
  }

  handleArmyClick = (event, bot)=> {
    // event.persist()
    // console.log(event);
    // this.state.myArmy.push(bot)
    let armyArr = this.state.myArmy 
    // console.log("original army", armyArr)
    let botToRemove = this.state.myArmy.find((b) => b.id === bot.id)
    // console.log("bot to remove", botToRemove)
    let index = armyArr.indexOf(botToRemove)
    // console.log("index", index)
    if (index > -1) {
      armyArr.splice(index, 1);
    }
    // console.log("new army", armyArr)

    this.setState({
      myArmy: [...armyArr]
    })
    // console.log(this.state.myArmy)
  }

  renderView() {
    if (!this.state.showView) {
      return (
        <div>
          <YourBotArmy handleArmyClick={this.handleArmyClick} myArmy={this.state.myArmy} />
          <BotCollection handleClick={this.handleClick} bots={this.state.bots} />
        </div>
      ) 
    } else {      
      return (
        <div>
          <YourBotArmy handleArmyClick={this.handleArmyClick} myArmy={this.state.myArmy} />
          <BotSpecs bots={this.state.bots}/>
        </div>
    ) 
    }
  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    )
  }

}

export default BotsPage;
