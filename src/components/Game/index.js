import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {Component} from 'react'
import {
  GameContainer,
  Rules,
  ScoreContainer,
  RPS,
  GlobalStyle,
  Score,
  ScorePara,
  GamePlay,
} from './StyledComponents'

class Game extends Component {
  state = {
    gameStarted: true,
    userChoice: '',
    computerChoice: '',
    result: '',
    score: 0,
  }

  onReplay = () => {
    this.setState({gameStarted: true})
  }

  renderResult = () => {
    const {computerChoice, userChoice, result} = this.state
    const {choicesList} = this.props
    console.log(choicesList)
    const yourImageURL = choicesList.find(
      eachItem => eachItem.id === userChoice).imageUrl
    const computerImageURL = choicesList.find(
      eachItem => eachItem.id === computerChoice).imageUrl

    return (
      <div>
        <h1>YOU</h1>
        <img alt="your choice" className="icon iconButton" src={yourImageURL} />
        <h1>OPPONENT</h1>
        <img
          alt="opponent choice"
          className="icon iconButton"
          src={computerImageURL}
        />
        <p>{result}</p>
        <button onClick={this.onReplay}>PLAY AGAIN</button>
      </div>
    )
  }

  onUserOption = (userChoice) => {
    
    const randomNumber = Math.floor(Math.random() * 3)
    const {choicesList} = this.props
    const computerChoice = choicesList[randomNumber].id
    console.log('userchoice',userChoice)

    if (computerChoice === userChoice) {
      this.setState({
        userChoice,
        computerChoice,
        gameStarted: false,
        result: 'IT IS DRAW',
      })
    } else if (
      (userChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
      (userChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
      (userChoice === 'PAPER' && computerChoice === 'ROCK')
    ) {
      this.setState(prevState => ({
        userChoice,
        computerChoice,
        gameStarted: false,
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else {
      this.setState(prevState => ({
        userChoice,
        computerChoice,
        gameStarted: false,
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    }
  }

  renderGame = () => {
    const {choicesList} = this.props
    return (
      <div className="flex-row">
        {choicesList.map(eachItem => {
          const onButtonClick = () => {
            
            this.onUserOption(eachItem.id)
          }

          return (
            <button
              data-testid={`${eachItem.id.toLowerCase()}Button`}
              onClick={onButtonClick}
              className="iconButton"
              key={eachItem.id}
            >
              <img alt={eachItem.id} className="icon" src={eachItem.imageUrl} />
            </button>
          )
        })}
      </div>
    )
  }

  render() {
    const {gameStarted, score} = this.state

    console.log(this.state)

    return (
      <GameContainer>
        <GlobalStyle />
        <ScoreContainer>
          <RPS>
            <h1>ROCK PAPER SCISSORS</h1>
          </RPS>
          <ScorePara>
            <p className="titlePara">Score</p>
            <Score>{score}</Score>
          </ScorePara>
        </ScoreContainer>

        {gameStarted ? this.renderGame() : this.renderResult()}

        <Popup trigger={<Rules>RULES</Rules>} modal nested>
          {close => (
            <div className="popUp">
              <button type="button" className="close" onClick={close}>
                <RiCloseLine />
              </button>
              <img
                className="rulesImage"
                alt="rules"
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              />
            </div>
          )}
        </Popup>
      </GameContainer>
    )
  }
}

export default Game
