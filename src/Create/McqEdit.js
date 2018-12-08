import React, { Component } from 'react';
import McqQuestion from './McqQuestion';
import OptionList from './OptionList'

class McqEdit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        question:'test q',
        options: [],
      };
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
     options[key].initOptValue = value;   
     this.setState({
       options: options,
     });
    }  
   
   optionCorrectChanged = (key, value) => {
     var options = this.state.options;
     options[key].isOptCorrect = value;   
     this.setState({
       options: options,
     });
    }
    
    render() {
        return (
          <div>
          <McqQuestion initQuestion={this.state.question} onQuestionChange={this.onQuestionChange}/>
           <button onClick={this.addChild}>Add Option</button>
                    {                                                      <OptionList options={this.state.options} optionChanged={this.onOptionChange} optionCorrectChanged={this.optionCorrectChanged}/>
                    }
            </div>
        );
      }
}

export default McqEdit;