import React, {Component} from 'react';

const Receipt = (props) => {
  return (
    <tr>
    <td>{props.booking.table.tableNumber}</td>
    <td>{props.booking.date}</td>
    <td>{props.booking.time}</td>
    <td>{props.booking.headCount}</td>
    <td>{props.booking.receiptItems.length}</td>
    </tr>
  );
}

export default Receipt;
