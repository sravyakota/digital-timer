import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {num: 25, pauseStartButton: false, timerInMins: 25, timerInSec: '00'}

  pauseStartChangingButton = () => {
    this.setState(prevState => ({
      pauseStartButton: !prevState.pauseStartButton,
    }))
  }
  //   incrementTimeElapsedInSeconds = () => {
  //     const {timerInMins, timerInSec} = this.state
  //     const isTimerCompleted = timerInSec === timerInMins * 60

  //     if (isTimerCompleted) {
  //       this.clearTimerInterval()
  //       this.setState({pauseStartButton: false})
  //     } else {
  //       this.setState(prevState => ({
  //         timerInSec: prevState.timerInSec + 1,
  //       }))
  //     }
  //   }

  //   pauseStartChangingButton = () => {
  //     const {pauseStartButton, timerInSec, timerInMins} = this.state
  //     const sec = parseInt(timerInSec)

  //     const isTimerCompleted = sec === timerInMins * 60

  //     if (isTimerCompleted) {
  //       this.setState({timerInSec: '00'})
  //     }
  //     if (pauseStartButton) {
  //       this.clearTimerInterval()
  //     } else {
  //       this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
  //     }
  //     this.setState(prevState => ({
  //       pauseStartButton: !prevState.pauseStartButton,
  //     }))
  //   }

  decrement = () => {
    const {timerInMins} = this.state
    this.setState(prevState => ({num: prevState.num - 1}))
    const s = timerInMins - 1
    this.setState({timerInMins: s})
  }

  increment = () => {
    const {timerInMins} = this.state
    this.setState(prevState => ({num: prevState.num + 1}))
    const s = timerInMins + 1
    this.setState({timerInMins: s})
  }

  resetButton = timeId => {
    this.setState({timerInMins: 25})
    this.setState({num: 25})
    this.setState({timerInSec: '00'})
    clearInterval(timeId)
  }

  render() {
    const {num, pauseStartButton, timerInMins, timerInSec} = this.state

    const s = pauseStartButton ? 'Pause' : 'Start'
    const im = pauseStartButton
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const sPara = pauseStartButton ? 'Running' : 'Paused'
    const icon = pauseStartButton ? 'pause icon' : 'play icon'

    return (
      <div className="bgContainer">
        <h1>Digital Timer</h1>
        <div className="digitalTimerContainer">
          <div className="digitalClockDisplayContainer">
            <div className="whiteBg">
              <h1 className="timerDisplay">
                {timerInMins}:{timerInSec}
              </h1>
              <p className="para">{sPara}</p>
            </div>
          </div>
          <div className="timerOperations">
            <div className="pauseRestartContainer">
              <div className="pp">
                <img src={im} alt={icon} className="logos" />
                <button
                  type="button"
                  className="buttuns"
                  onClick={this.pauseStartChangingButton}
                >
                  {s}
                </button>
              </div>
              <div className="pp">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="logos"
                />
                <button
                  type="button"
                  className="buttuns"
                  onClick={this.resetButton}
                >
                  Reset
                </button>
              </div>
            </div>
            <p className="para">set Timer Limit</p>
            <div className="pp">
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.decrement}
                >
                  -
                </button>
              </div>
              <div className="cc">
                <p>{num}</p>
              </div>
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.increment}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
