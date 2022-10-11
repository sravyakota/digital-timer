import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {timer: 25, pauseStartButton: false}

  pauseStartChangingButton = () => {
    this.setState(prevState => ({
      pauseStartButton: !prevState.pauseStartButton,
    }))
  }

  decrement = () => {
    this.setState(prevState => ({timer: prevState.timer - 1}))
  }

  increment = () => {
    this.setState(prevState => ({timer: prevState.timer + 1}))
  }

  render() {
    const {timer, pauseStartButton} = this.state

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
              <h1 className="timerDisplay">11:00</h1>
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
                <button type="button" className="buttuns">
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
                <p>{timer}</p>
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
