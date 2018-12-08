import React, { Component } from 'react';
import McqOption from './McqOption';

class OptionList extends React.Component {
    constructor(props) {
      super(props);    
      this.state = {
        options: props.options,
      };
      var changedOptions = props.options;
    }
    
    createOption = (opt) => {
      return <McqOption key={opt.key} id={opt.key} isOptCorrect={opt.isOptCorrect} initOptValue={opt.initOptValue}  onOptionChange={this.onOptionChange} optionCorrectChanged={this.optionCorrectChanged}/>;
    }
  
    createOptions = () => {
        return this.props.options.map(this.createOption);
     }
        
    onOptionChange = (key, value) => {
      this.props.optionChanged(key, value);
    }
    
    optionCorrectChanged = (key, value) => {
      this.props.optionCorrectChanged(key, value);
    }
    
    render () {
      return (
        <div className="container">
          {this.createOptions()}
        </div>
      );
    }
  }

  export default OptionList;
  