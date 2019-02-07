import React, { Component, Fragment } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import ModalBookingForm from './ModalBookingForm.js'
import Request from '../../helpers/requestHelper.js'


class BookingFormModal extends Component {

  constructor(props){
    super(props);
    let { customer, id, firstName, lastName, telephone, discount, time, date, headCount, table} = this.props;

    this.state = {
      existingCustomers: [],
      customer: null,
      id,
      firstName,
      lastName,
      telephone,
      discount,
      time,
      date: this.props.date,
      headCount,
      table
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.addBooking = this.addBooking.bind(this);
  }

  componentDidMount(){
    const request = new Request()
    request.get('/customers').then(data =>{
      this.setState({existingCustomers: data._embedded.customers})
    })
  }

  handleClickOpen() {
    this.setState({ open: true });
  };

  handleClose () {
    this.props.closeForm();
  };

  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  }

  handleCustomerSelect = e => {
    const customerId = e.target.value;
    const customerSelected = this.state.existingCustomers
    .filter(customer => customer.id === customerId)[0];
    this.setState({customer: customerSelected});
  }

  addBooking() {
    // POST requests as necessary to backend to add customer --> booking --> table(s) using state data above
    // this.handleClose();
    const booking = {
      "date": this.props.date,
      "time": this.props.time,
      "headCount": this.state.headCount,
      "customer": this.state.customer._links.self.href,
      "table": this.props.table._links.self.href
    }
    const request = new Request();
    request.post('/bookings', booking).then(() => {
      window.location = '/bookings'
    })
  }






  render() {
    const { firstName, lastName, telephone, discount } = this.state;
    const { time, date, headCount, table, existingCustomers } = this.state;
    const values = { firstName, lastName, telephone, discount, time: this.props.time, date: this.props.date, headCount, table: this.props.table, existingCustomers, customer: this.state.customer };

    return (
      <div>
        <Dialog
          open={this.props.openForm}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"

        >
          <DialogTitle id="form-dialog-title">Book Reservation</DialogTitle>
          <DialogContent>

            <ModalBookingForm
              values = {values}
              handleChange={this.handleChange}
              handleCustomerSelect = {this.handleCustomerSelect}
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.addBooking} color="primary">
              Add Booking
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

}

export default BookingFormModal;
