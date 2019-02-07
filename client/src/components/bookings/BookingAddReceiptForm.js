import React, {Component} from 'react';
import Request from '../../helpers/requestHelper.js';

class BookingAddReceiptForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      stockItems: [],
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
      "price": event.target.stockItem.value,
      "booking": this.props.booking._links.self.href
    }
    this.props.handleReceiptItemPost(receiptItem);
  }

  render(){

    return (
      <form onSubmit={this.handleSubmit}>

      <button type="submit">Pay order</button>
      </form>
    )}
  }

export default BookingAddReceiptForm;
