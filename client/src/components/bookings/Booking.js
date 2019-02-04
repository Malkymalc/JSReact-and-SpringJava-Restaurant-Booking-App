import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Booking = (props) => {

  const { date, time, headCount, customer, tableList } = props.booking;

  return (
    <Fragment>
      <ul>
        <li>Date: {date}</li>
        <li>Time: {time}</li>
        <li>Headcount: {headCount}</li>
        {/* <li><Link to={customer}>Customer</Link></li>
        <li> <Link to={tableList}>Tables</Link></li> */}
      </ul>
    </Fragment>
  );
}

export default Booking;
