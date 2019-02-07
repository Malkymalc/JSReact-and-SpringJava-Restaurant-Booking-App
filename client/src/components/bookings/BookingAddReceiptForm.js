import React, {Component} from 'react';
import Request from '../../helpers/requestHelper.js';

class BookingAddReceiptForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      stockItems: [],
      orderedItems: this.props.order
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const request = new Request()
    request.get('/stockItems').then(data =>{
      this.setState({stockItems: data._embedded.stockItems})
    })
  }

  handleSubmit(event){
    event.preventDefault()
    const receiptItem = {
      "name": this.state.stockItems[0].name,
      "price": this.state.stockItems[0].price,
      "booking": this.props.booking._links.self.href
    }
    this.props.handleReceiptItemPost(receiptItem);
    this.refs.btn.setAttribute("disabled", "disabled");
    window.location = "/bookings";
  }

  render(){

    return (
      <form onSubmit={this.handleSubmit}>

      <button ref="btn" type="submit">Pay order</button>
      </form>
    )}
  }

export default BookingAddReceiptForm;
