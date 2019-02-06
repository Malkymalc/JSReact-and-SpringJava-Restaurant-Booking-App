import React, {Component} from 'react';
import Request from '../helpers/requestHelper.js';
import ReceiptsList from '../components/receipts/ReceiptsList.js';

export default class ReceiptsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      customers: [],
      currentCustomer: null
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount(){
    let request = new Request()
    request.get('customers').then(data => {
      this.setState({ customers: data._embedded.customers});
    })
  }

  handleSelect(event){
    const customerID = event.target.value;
    this.setState({currentCustomer: this.state.customers[customerID]});
  }

  render(){
    const customerElements = this.state.customers.map((customer, index) => {
      return <option key={customer.id} value={index}>{customer.firstName} {customer.lastName}</option>
    })

  return (
    <>
    <h1>Receipts</h1>
    Select Customer:
    <select onChange={this.handleSelect} name="customer">
    {customerElements}
    </select>
    <ReceiptsList customer={this.state.currentCustomer}/>
    </>
  );}
}
