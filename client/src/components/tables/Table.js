import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Table = (props) => {

  const { tableNumber, seatCount, bookings } = props.table;

  return (
    <Fragment>
      <li>Table Number: {tableNumber}</li>
      <li>HeadCount: {seatCount}</li>
      <li> <Link to={bookings}>Bookings</Link> </li>
    </Fragment>
  );
}

export default Table;
