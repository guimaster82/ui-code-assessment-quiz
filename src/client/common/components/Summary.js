import React, { Component } from 'react';
import './template-custom.css'

class Summary extends Component {

  constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }

    onClick = (e) => {
      e.preventDefault();
        this.props.onClickFromParent(true)
    }

  render(){

      return (
      <div className="Summary">
        <form onClick={this.onClick}>
          <strong>SUMMARY</strong>
          <ul>
            <li>
              <label>
                Correct: <strong>{this.props.dataFromParent.correctAnswers}</strong>
              </label>
            </li>
            <li>
              <label>
                Wrong: <strong>{this.props.dataFromParent.index - this.props.dataFromParent.correctAnswers}</strong>
              </label>
            </li>
            <li>
              <label>
                Questions Answered: <strong>{this.props.dataFromParent.index}</strong>
              </label>
            </li>
            <li>
              <label>
                Final Score: <strong>{this.props.dataFromParent.correctAnswers / this.props.dataFromParent.index *100}%</strong>
              </label>
            </li>

          </ul>
          <button className="myButton" type="onClick">Restart Quiz</button>
        </form>
      </div>


    )
  }
}

export default Summary
