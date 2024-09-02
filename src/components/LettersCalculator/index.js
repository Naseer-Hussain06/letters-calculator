import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputCount: 0,
  }

  onChangeInputElement = event => {
    this.setState({inputCount: event.target.value.length})
  }

  render() {
    const {inputCount} = this.state
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the letters you enter</h1>
            <div className="input-pharse-container">
              <label htmlFor="letter" className="input-up-para">
                Enter the phrase
              </label>
              <br />
              <input
                type="type"
                id="letter"
                className="input-element"
                placeholder="Enter the phrase"
                onChange={this.onChangeInputElement}
              />
            </div>
            <div>
              <p className="count-card">No.of letters: {inputCount}</p>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
                alt="letters calculator"
                className="letters-calculator-image2"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
