import React from "react";
import BotCollection from "../containers/BotCollection";
import YourBotArmy from "../containers/YourBotArmy";

class BotsPage extends React.Component {

  state = {
    allBots: [], 
    MyBots: [], 
    clicked: false
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then((data) => {
        this.setState({
          allBots: data
        })
      })

      console.log("Fetch Complete")

  }


  setClicked = () => {
    this.setState({
      clicked: true 
    })
  }

  addBot = (bot) => {
    if(this.state.MyBots.includes(bot)) {
      alert("no")
    } else {
      this.setState({
  
        MyBots: [...this.state.MyBots, bot ]
      })

    }
  

    }
    

  removeBot= (bot) => {
    this.setState({
      MyBots: this.state.MyBots.filter((b) => b.id !== bot.id )
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy myBots= {this.state.MyBots} removeBot={this.removeBot}/>
        <BotCollection allBots={this.state.allBots} addBot={this.addBot} MyBots={this.state.MyBots} setClicked={this.setClicked} clicked={this.state.clicked}/>
      
      </div>
    );
  }

}

export default BotsPage;
