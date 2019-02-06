import React, {Component} from 'react';

export default class BookingDatePicker extends Component {
  constructor(props){
    super(props);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  handleChangeDate(data){
    this.props.updateContainer(data.target.value);
  }

  render(){
    if(!this.props.dateDisplay) {return null;}
    return (<input type="date" onChange={this.handleChangeDate} value={this.props.dateDisplay}></input>);
  };
}
