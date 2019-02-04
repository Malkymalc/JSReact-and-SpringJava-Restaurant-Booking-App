import React, { Fragment } from 'react';

const Table = (props) => {

  const { tableNumber, seatCount } = props.table;

  return (
    <Fragment>
      <li>Table Number: {tableNumber}</li>
      <li>HeadCount: {seatCount}</li>
    </Fragment>
  );
}

export default Table;
