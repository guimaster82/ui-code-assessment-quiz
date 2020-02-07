import React, { Component } from 'react';
import he from 'he';
import './template-custom.css'

class TextField extends Component {

  constructor(props) {
      super(props);
      this.state = {
        inputText:''
      };

      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (e) => {
      e.preventDefault();
      if(this.state.inputText.toLowerCase() == this.props.dataFromParent.correct_answer.toLowerCase()){
        this.props.onSubmitFromParent(true)
      }
      else{
        this.props.onSubmitFromParent(false)
      }
      this.setState({
        selecction: ''
      })
    }

    onChange = (e) => {
      this.setState({
        inputText: e.target.value
      })
    }

  render() {
    return (
      <div className="TextField">
        <form onSubmit={this.onSubmit}>
          <h3>{he.decode(this.props.dataFromParent.question)}</h3>
          <ul>
            <li>
              <label>
                <input
                  type="text"
                  value={this.state.inputText}
                  onChange={this.onChange}
                />
              </label>
            </li>


          </ul>

          <button className="myButton" type="submit">Next</button>
        </form>
      </div>
    );


  }


}

export default TextField
