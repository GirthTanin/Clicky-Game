import React, { Component } from 'react';
import beasts from "./beasts.json";
import Card from "./components/card";
import Navbar from "./components/navbar";
import Score from "./components/score";
import Wrapper from "./components/wrapper";

class App extends Component {

  state = {
    beasts: beasts.map(beas => ({ ...beast})),
    yourScore: 0,
    highScore: 0,
    yourGuess: "",
  };




  handleClick = id => {
    const chosenBeast = this.state.beasts.find(name =>name.id ===id);

    if (chosenBeast.clicked === false) {
      chosenBeast.clicked = true;
      const shuffledBeasts = this.state.starters.sort((a,b) => 0.5 - Math.random());
      this.setState({ beasts: shuffledBeasts })
      this.handleIncrement();

    }

    else {
        if (this.state.yourScore === 21) {
          alert ("Great Jorb Homestray!  You know all the Coding Beasts!");
          this.setState({ highScore: this.state.yourScore, 
            yourScore: 0,
            beasts: beasts.map(beast => ({ ...beast}))})}
    }

    else if (this.state.yourScore > this.state.highScore) { alert("Good Try! NEW HIGH SCORE!")
    this.setState({highScore: this.state.yourScore,
        yourScore: 0,
        beasts: beasts.map(beast => ({...beast}))});
    }

    else {
      alert("Where my lazers at! You clicked them twice!");
      this.setState({yourScore: 0,
        beasts: beasts.map(beast => ({...beast}))});
      }
    }
  };

  handleIncrement = () => {
    this.setState({yourScore: this.state.yourScore + 1 });
  };


  render() {
    return (
      <div>
        <Navbar yourScore={this.state.yourScore} highScore={this.state.highScore} yourGuess={this.state.yourGuess} />
        <Wrapper>
          <Title> Click each Coder once to earn a point.<br></br>Click any of them twice, and you'll make them angry and it's game over.</Title>
        </Wrapper>
      </div>
          
          
          
        </header>
      </div>
    );
  }
}

export default App;
