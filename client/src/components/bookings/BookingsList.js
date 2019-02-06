import React, { Fragment } from 'react';
import Booking from './Booking.js';

const BookingsList = (props) => {

  const bookings = props.bookings.map((booking, index) =>{
    return (
      <Booking
        booking={booking}
        key={index}
      />
    );
  })

  return (
    <Fragment>
      { bookings }
    </Fragment>
  );
}

export default BookingsList;
