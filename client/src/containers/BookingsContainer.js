import React, {Component} from 'react';
import BookingsList from '../components/bookings/BookingsList.js';
import BookingTableHeader from '../components/bookings/BookingTableHeader.js';
import BookingTable from '../components/bookings/BookingTable.js';
import Request from '../helpers/requestHelper.js';


class BookingsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tables: []
    }
  }

  componentDidMount(){
    let request = new Request()
    request.get('tables').then(data => {
      this.setState({tables: data._embedded.tables});

    })
  }

  getBookings(){

  }


  render(){
    return (
      <table>
        <BookingTableHeader/>
        <BookingTable tables={this.state.tables}/>
      </table>
    );
  }
}

export default BookingsContainer;
