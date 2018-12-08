import React, { Component } from 'react';

class McqOption extends React.Component {
    constructor(props) {
      super(props);    
      this.state = {
        id: props.id,
        isChecked: props.isOptCorrect,
      };    
    }
    
    toggleChange = () => {
      this.setState({
        isChecked: !this.state.isChecked,
      });
      this.props.optionCorrectChanged(this.state.id, this.state.isChecked);
      
    }
    
    updateInputValue = (evt) => {
      this.props.onOptionChange(this.state.id, evt.target.value);   
    }
      
    render() {
      return (
        <div id={this.state.id}>
        <div id={'q'+this.state.id}>
        <label id={'l'+this.state.id}>{this.state.id}</label>
        <input id={'i'+this.state.id} type="text" placeholder={this.props.initOptValue} onChange={this.updateInputValue}/>       
          </div>
        <br/>
        <label id={'c'+this.state.id}>Correct answer</label>
        <input id={'ch'+this.state.id} type="checkbox"
            checked={this.state.isChecked}
            onChange={this.toggleChange}
          />
        </div>
      );
    }
  }

  export default McqOption;
  