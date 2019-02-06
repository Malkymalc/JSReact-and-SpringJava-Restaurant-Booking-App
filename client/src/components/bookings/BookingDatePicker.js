import React, {Component} from 'react';

export default class BookingDatePicker extends Component {
  constructor(props){
    super(props);
    this.test = this.test.bind(this);
  }

  test(data){
    this.props.updateContainer(data.target.value);
  }

  render(){
    return (<input type="date" onChange={this.test}></input>);
  };
}
