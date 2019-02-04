import React, {Component} from 'react';
import BookingsList from '../../components/bookings/BookingsList.js';
import Request from '../../helpers/request.js';


class BookingsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      bookings: []
    }
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/bookings').then(data => {
      this.setState({bookings: data._embedded.bookings})
    })
  }

  getBookings(){

  }


  render(){
    return (
        <BookingsList bookings={this.state.bookings}/>
    );
  }
}

export default BookingsContainer;
