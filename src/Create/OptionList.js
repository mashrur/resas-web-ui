import React, { Component } from 'react';
import McqOption from './McqOption';

const OptionList = (props) => {
    var createOption = (opt) => {
      return <McqOption key={opt.key} id={opt.key} isOptCorrect={opt.isOptCorrect} initOptValue={opt.initOptValue}  onOptionChange={onOptionChange} optionCorrectChanged={optionCorrectChanged}/>;
    }
  
    var createOptions = () => {
        return props.options.map(createOption);
     }
        
    var onOptionChange = (key, value) => {
      props.optionChanged(key, value);
    }
    
    var optionCorrectChanged = (key, value) => {
      props.optionCorrectChanged(key, value);
    }
    
    return (
        <div className="container">
          {createOptions()}
        </div>
      );
  }

  export default OptionList;
  