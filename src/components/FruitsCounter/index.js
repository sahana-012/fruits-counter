// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onEatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="background-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="eaten-fruits-count"> {mangoCount}</span>{' '}
            mangoes <span className="eaten-fruits-count">{bananaCount}</span>{' '}
            bananas
          </h1>

          <div className="counters-control-container">
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruits-image"
                alt="mango"
              />
              <div className="button-container">
                <button
                  className="eat-fruit-button"
                  type="button"
                  onClick={this.onEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruits-image"
                alt="banana"
              />
              <div className="button-container">
                <button
                  className="eat-fruit-button"
                  type="button"
                  onClick={this.onEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
