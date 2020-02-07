import React, { Component } from 'react';
import he from 'he';
import './template-custom.css'

class Multiple extends Component {

  constructor(props) {
      super(props);
      this.state = {
        selecction:'',
        data:[]
      };

      this.onRadioChange = this.onRadioChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onRadioChange = (e) => {
        this.setState({
          selecction: e.target.value
        })
    }

    onSubmit = (e) => {
      e.preventDefault();
      if(this.state.selecction == this.props.dataFromParent.correct_answer){
        this.props.onSubmitFromParent(true)
      }
      else{
        this.props.onSubmitFromParent(false)
      }
      this.setState({
        selecction:'',
        data:[]
      })
    }

    render() {

      if (this.state.data.length == 0){
        this.state.data = this.props.dataFromParent.incorrect_answers
        this.state.data.push(this.props.dataFromParent.correct_answer)
        this.state.data.sort(() => 0.5 - Math.random());
        //console.log(this.state.data);
      }

      return (
        <div className="Multiple">
          <form onSubmit={this.onSubmit}>
            <h3>{he.decode(this.props.dataFromParent.question)}</h3>
            <ul >
              <li>
                <label>
                  <input
                    type="radio"
                    value={this.state.data[0]}
                    checked={this.state.selecction === this.state.data[0]}
                    onChange={this.onRadioChange}
                  />
                  <span>{this.state.data[0]}</span>
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    value={this.state.data[1]}
                    checked={this.state.selecction === this.state.data[1]}
                    onChange={this.onRadioChange}
                  />
                  <span>{this.state.data[1]}</span>
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    value={this.state.data[2]}
                    checked={this.state.selecction === this.state.data[2]}
                    onChange={this.onRadioChange}
                  />
                  <span>{this.state.data[2]}</span>
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    value={this.state.data[3]}
                    checked={this.state.selecction === this.state.data[3]}
                    onChange={this.onRadioChange}
                  />
                  <span>{this.state.data[3]}</span>
                </label>
              </li>

            </ul>

            <button className="myButton" type="submit">Next</button>
          </form>
        </div>
      );
    }

}

export default Multiple
