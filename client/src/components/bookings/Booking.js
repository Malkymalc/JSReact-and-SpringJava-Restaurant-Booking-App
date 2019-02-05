import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import Request from '../../helpers/requestHelper.js';

export default class Booking extends Component {

  constructor(props){
    super(props);

    this.state = {
      booking: [],
      customer: []
    };
  }

  componentDidMount(){
    let request = new Request()
    const url = `${this.props.match.params.id}` + "?projection=embedCustomer";
    request.get(url).then(data => {
      this.setState({booking: data, customer: data.customer});
      console.log(this.state.customer);
    })
  }

  render(){
  return (
    <Fragment>
    <ul>
      <li>Customer: {this.state.customer.firstName} {this.state.customer.lastName}</li>
      <li>Date: {this.state.booking.date}</li>
      <li>Time: {this.state.booking.time}</li>
      <li>Number Of People: {this.state.booking.headCount}</li>
    </ul>
    </Fragment>
  );
}
}
