import React from 'react';

const McqOption = (props) => {
    
    var toggleChange = (evt) => {
      props.optionCorrectChanged(props.id, !props.isOptCorrect);
    }
    
    var updateInputValue = (evt) => {
      props.onOptionChange(props.id, evt.target.value);   
    }
      
   return (
        <div id={props.id}>
        
        <label id={'l'+props.id}>{props.id}</label>
        <textarea id={'i'+props.id} placeholder={props.initOptValue} onChange={updateInputValue} rows="4" cols="50"/>       
       
        <label id={'c'+props.id}>Correct</label>
        <input id={'ch'+props.id} type="checkbox"
            checked={props.isOptCorrect}
            onChange={toggleChange}
          />
        </div>
      )
  }

  export default McqOption;
  