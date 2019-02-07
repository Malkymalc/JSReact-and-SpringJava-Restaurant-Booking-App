import React, {Component} from 'react'
import Request from '../helpers/requestHelper.js';

import BookingForm from '../components/bookings/BookingForm.js';

class BookingFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      customers: [],
      timeSlots: ["10:00", "11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"],
      tables: []
    }
    this.handleBookingPost = this.handleBookingPost.bind(this)
  }

  componentDidMount(){
    const request = new Request()
    request.get('/customers').then(data =>{
      this.setState({customers: data._embedded.customers})
    })

    const request2 = new Request()
    request2.get('/tables').then(data =>{
      this.setState({tables: data._embedded.tables})
    })
  }

  handleBookingPost(booking){
    const request = new Request();
    request.post('/bookings', booking).then(() => {
      window.location = '/bookings'
    })
  }

  handleBookingUpdate(booking){
    const url = '/bookings/' + booking.id;
    let request = new Request();
    request.put(url, booking).then(data => {
      window.location = '/bookings'
    })
  }

  render(){
    return (
      <BookingForm customer={this.state.customers} table={this.state.tables} times={this.state.timeSlots} handleBookingPost={this.handleBookingPost} />
    )
  }

}

export default BookingFormContainer
