import React, {Component, Fragment} from 'react';
import CustomersList from '../components/customers/CustomersList.js';
import CustomersHeader from '../components/customers/CustomersHeader.js';
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
      <Fragment>
      <h1>Customers</h1>
      <CustomersHeader/>
      <table>
        <CustomersList customers={this.state.customers}/>
      </table>
      </Fragment>
    );
  }
}

export default CustomersContainer;
