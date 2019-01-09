import React, { Component } from 'react';
import McqQuestion from './McqQuestion';
import OptionList from './OptionList';
import axios from 'axios';


class McqEdit extends React.Component {
  state = {
    question:'',
    options: [],
  };
    
  constructor(props) {
      super(props);      
    }
    
    componentDidMount() {
      axios.get(`https://raw.githubusercontent.com/mashrur/resas-web-ui/master/db.json`)
        .then(res => {
          const questions = res.data;
          this.setState({ question: questions.question,
            options: questions.options
           });
        })
    }

   saveValue = () => {
      console.log('value to be saved: ' + this.state.options);
    }
   
  onQuestionChange = (question) => {
    this.setState({
      question:question,
    })
  }
   addChild = () => {
     var options = this.state.options;
     options.push({key:options.length, isOptCorrect:false, initOptValue:''});
     this.setState({
       options: options,
     });
   }
   
   onOptionChange = (key, value) => {
     var options = this.state.options;
     options[key-1].initOptValue = value;   
     this.setState({
       options: options,
     });
    }  
   
   optionCorrectChanged = (key, value) => {
     var options = this.state.options;
     options[key-1].isOptCorrect = value;   
     this.setState({
       options: options,
     });
    }
    
    render() {
        return (
          <div>
          <McqQuestion initQuestion={this.state.question} onQuestionChange={this.onQuestionChange}/>
                    {                                                     
                       <OptionList options={this.state.options} optionChanged={this.onOptionChange} optionCorrectChanged={this.optionCorrectChanged}/>
                    }
            <button onClick={this.addChild}>Add Option</button>
            <button>Save</button>
            </div>
        );
      }
}

export default McqEdit;