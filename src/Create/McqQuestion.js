import React, { Component } from 'react';

class McqQuestion extends React.Component {
    constructor(props) {
      super(props);    
    }
      
    updateInputValue = (evt) => {
      this.props.onQuestionChange(evt.target.value);   
    }
      
    render() {
      return (
        <div>
        <label>Question</label>
        <input type="text" placeholder={this.props.initQuestion} onChange={this.updateInputValue}/>       
          </div>
      );
    }
  }

  export default McqQuestion;