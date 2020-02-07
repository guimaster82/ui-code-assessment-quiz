import React, { Component } from 'react';
import he from 'he';
import './template-custom.css'

class Boolean extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selecction:''
    };

    this.onRadioChange = this.onRadioChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onRadioChange = (e) => {
    this.setState({
      selecction: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.selecction === this.props.dataFromParent.correct_answer){
      this.props.onSubmitFromParent(true)
    }
    else{
      this.props.onSubmitFromParent(false)
    }
    this.setState({
      selecction: ''
    })
  }

  render() {
    return (
      <div className="Boolean">
        <form onSubmit={this.onSubmit}>
          <h3>{he.decode(this.props.dataFromParent.question)}</h3>
          <ul >
            <li>
            <label>
              <input
                type="radio"
                value="True"
                checked={this.state.selecction === "True"}
                onChange={this.onRadioChange}
              />
              <span>True</span>
            </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="False"
                  checked={this.state.selecction === "False"}
                  onChange={this.onRadioChange}
                />
                <span>False</span>
              </label>
            </li>

          </ul>

          <button className="myButton" type="submit">Next</button>
        </form>
      </div>
    );
  }

}

export default Boolean
