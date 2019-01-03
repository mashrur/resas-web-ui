import React from 'react';

const McqQuestion = (props) => {
            
    var updateInputValue = (evt) => {
      props.onQuestionChange(evt.target.value);   
    }
      
    return (
        <div>
        <label>Question</label>
        <input type="text" placeholder={props.initQuestion} onChange={updateInputValue}/>       
          </div>
      );
  }

  export default McqQuestion;