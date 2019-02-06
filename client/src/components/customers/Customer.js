import React, {Component, Fragment} from 'react';
import Request from '../../helpers/requestHelper.js';

export default class Customer extends Component{
  constructor(props){
    super(props);
    this.state = {
      customer:[]
    }
  }

  componentDidMount(){
    let request = new Request()
    const url = `${this.props.match.params.id}`;
    request.get(url).then(data => {
      this.setState({customer: data});
      console.log(this.state.customer);
    })
  }

  render(){
  return (
    <Fragment>
    <ul>
      <li>First Name: {this.state.customer.firstName}</li>
      <li>Surname: {this.state.customer.lastName}</li>
      <li>Discount: {this.state.customer.discount}%</li>
      <li>Phone Number: {this.state.customer.phoneNumber}</li>
    </ul>
    </Fragment>
  );
}
}
