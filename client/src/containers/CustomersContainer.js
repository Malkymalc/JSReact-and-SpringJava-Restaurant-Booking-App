import React, {Component} from 'react';
import BookingsList from '../../components/bookings/CustomersList.js';
import Request from '../../helpers/request.js';


class CustomersContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      customers: []
    }
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/customers').then(data => {
      this.setState({bookings: data._embedded.customers})
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
