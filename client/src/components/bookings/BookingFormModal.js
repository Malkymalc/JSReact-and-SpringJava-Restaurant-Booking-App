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
    let { customer, id, firstName, lastName, telephone, discount, time, date, headCount, tables} = this.props;

    this.state = {
      open: false,
      existingCustomers: [],
      customer: null,
      id,
      firstName,
      lastName,
      telephone,
      discount,
      time,
      date,
      headCount,
      tables: []
    };
  }

  componentDidMount(){
    const request = new Request()
    request.get('/customers').then(data =>{
      this.setState({existingCustomers: data._embedded.customers})
    })
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = input => e => {
    console.log(e.target.value);
    console.log(input);
    this.setState({[input]: e.target.value})
    console.log(this.state[input]);
  }

  handleCustomerSelect = e => {
    const customerId = e.target.value;
    console.log(this.state.existingCustomers);
    console.log(customerId);
    const customerSelected = this.state.existingCustomers
    .filter(customer => customer.id === customerId)[0];
    console.log(customerSelected);
    this.setState({customer: customerSelected}, () => {
      console.log('the customer is: ', this.state.customer)
    })
  }

  addBooking = () => {
    console.log('Last name is :', this.state.lastName);
    // POST requests as necessary to backend to add customer --> booking --> table(s) using state data above
    this.handleClose();
    // Trigger refresh of bookings page - booking should now show
  }






  render() {
    const { firstName, lastName, telephone, discount } = this.state;
    const { time, date, headCount, tables, existingCustomers } = this.state;
    const values = { firstName, lastName, telephone, discount, time, date, headCount, tables, existingCustomers };

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog
          open={this.state.open}
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
