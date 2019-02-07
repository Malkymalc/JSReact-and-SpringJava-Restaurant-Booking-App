import React, {Component} from 'react';
import Request from '../../helpers/requestHelper.js';

class BookingAddItemForm extends Component {
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
    const orderedItem = {
      "stockItem": event.target.stockItem.value,
      "booking": this.props.booking._links.self.href
    }
    this.props.handleOrderedItemPost(orderedItem);
  }

  render(){

    const itemOptions = this.state.stockItems.map((item) => {
      return <option key={item.id} value={item._links.self.href}>{item.name}</option>
    })

    return (
      <form onSubmit={this.handleSubmit}>
      <select name="stockItem">
      {itemOptions}
      </select>

      <button type="submit">Add order</button>
      </form>
    )}
  }

export default BookingAddItemForm;
