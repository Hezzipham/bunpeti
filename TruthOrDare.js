<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>


class TruthOrDare extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput: '',
        randomIndex: '',
      };
      this.ask = this.ask.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    ask() {
      if(this.state.userInput) {
        this.setState({
          randomIndex: Math.floor(Math.random() * 20),
          userInput: ''
        });
      }
    }
    handleChange(event) {
      this.setState({
        userInput: event.target.value
      });
    }
    render() {
      const possibleAnswers = [
        "What’s the craziest thing you’ve done on public transportation?",
        "What’s the meanest thing you’ve ever said to someone else?",
        'Who was your worst kiss ever?',
        "Who’s the oldest person you’ve dated?",
        'How many selfies do you take a day?',
        "Name someone you’ve pretended to like but actually couldn’t stand.",
        "What’s the last lie you told?",
        "What’s the craziest thing you’ve done in front of a mirror?",
        'Have you ever been nude in public?',
        "What is the youngest age partner you’d date?",
        "What’s your biggest regret in life?",
        'Would you break up with your partner for $1 million?',
        "What’s one job you could never do?",
        'Have you ever ghosted a friend?',
        'Have you ever ghosted a partner?',
        "If you could become invisible, what’s the worst thing you’d do?",
        "What’s the weirdest dream you’ve ever had?",
        "When’s the last time you got caught in a lie?",
        "What’s the worst advice you’ve ever given someone else?",
        "What’s the most offensive joke you’ve found funny?"
      ];
      const question = possibleAnswers[this.state.randomIndex];
      return (
        <div>
          <h1>Truth Or Dare Game</h1>
          <select onChange={this.handleChange} placeholder="YO" name="player" id="player">
              <option value='0' disabled>PLAYER</option>
              <option value="player1">Player 1</option>
              <option value="player2">Player 2</option>
              <option value="player3">Player 3</option>
              <option value="player4">Player 4</option>
          </select>
          <button onClick={this.ask}>'s Question</button>
          <br />
          <h3>{question}</h3>
        </div>
      );
    }
  }