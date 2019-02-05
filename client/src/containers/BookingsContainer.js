import React, {Component, Fragment} from 'react';
import BookingsList from '../components/bookings/BookingsList.js';
import BookingTableHeader from '../components/bookings/BookingTableHeader.js';
import BookingTable from '../components/bookings/BookingTable.js';
import BookingDatePicker from '../components/bookings/BookingDatePicker.js'
import Request from '../helpers/requestHelper.js';


class BookingsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tables: [],
      date: null
    }

    this.dateHandler = this.dateHandler.bind(this);
  }

  componentDidMount(){
    let request = new Request()
    request.get('tables').then(data => {
      this.setState({tables: data._embedded.tables});

    })
  }

  dateHandler(selectedDate){
    this.setState({date: selectedDate});
  }


  render(){
    return (
      <Fragment>
      <BookingDatePicker updateContainer={this.dateHandler}/>
      <table>
        <BookingTableHeader/>
        <BookingTable tables={this.state.tables} date={this.state.date}/>
      </table>
      </Fragment>
    );
  }
}

export default BookingsContainer;
