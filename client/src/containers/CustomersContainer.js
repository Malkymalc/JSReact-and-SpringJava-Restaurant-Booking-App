import React, {Component} from 'react';
import CustomersList from '../components/customers/CustomersList.js';
import Request from '../helpers/requestHelper.js';


class CustomersContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      customers: []
    }
  }

  componentDidMount(){
    let request = new Request()
    request.get('customers').then(data => {
      this.setState({customers: data._embedded.customers})
    })
  }

  getCustomers(){

  }


  render(){
    return (
        <CustomersList customers={this.state.customers}/>
    );
  }
}

export default CustomersContainer;
