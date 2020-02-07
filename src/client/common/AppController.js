import React, { Component } from 'react'

import TextField from './components/TextField'
import Summary from './components/Summary'
import Boolean from './components/Boolean'
import Multiple from './components/Multiple'

class AppController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arQuestions:[],
      totalIndex:0,
      index:0,
      correctAnswers:0
    }
  }

  shuffleQuestions() {
    this.state.arQuestions.sort(() => 0.5 - Math.random())
    console.log("shuffling")
  };

  componentDidMount(){
    //try catch needed
    fetch(`http://localhost:4000/api/questions`)
      .then(results => results.json())
      .then(res => {
        this.setState({
          arQuestions:res.results
        })
        this.shuffleQuestions()
      })
      //http reults check needed
      //TODO refactor
    }

    handleSubmit = (e) => {
      let index = this.state.index
      let totalIndex = this.state.totalIndex
      this.setState({
        index: ++index,
        totalIndex: ++totalIndex
      });
      if (e === true){
        console.log("correct answer")
        let correctAnswers = this.state.correctAnswers
        this.setState({
          correctAnswers: ++correctAnswers
        })
      }
      else{
        console.log("incorrect answer")
      }
    }

    handleClick = (e) => {
      this.setState({
        index:0,
        correctAnswers:0
      });
    }

    render(){
      let data = this.state.arQuestions[this.state.totalIndex]

      //TODO too many returns
      if(this.state.totalIndex >= 50 ){
        //restart quiz?
        return (
          <div>
            Finished all questions!
          </div>
        );
      }

      if(this.state.arQuestions.length > 0 && this.state.index < 5){
        if(data.type === "boolean"){
          return (
            <div>
              <Boolean onSubmitFromParent={this.handleSubmit} dataFromParent={data}/>
            </div>
          );
        }
        else if(data.type === "multiple"){
          return (
            <div>
              <Multiple onSubmitFromParent={this.handleSubmit} dataFromParent={data}/>
            </div>
          );
        }
        else if(data.type === "text"){
          return (
            <div>
              <TextField onSubmitFromParent={this.handleSubmit} dataFromParent={data}/>
            </div>
          );
        }
      }
      else {
        return (
          <div>
            <Summary onClickFromParent={this.handleClick} dataFromParent={this.state}/>
          </div>
        );
      }
    }
  }

  export default AppController
