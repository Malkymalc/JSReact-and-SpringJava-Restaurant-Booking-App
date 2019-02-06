import React from 'react';

const CustomerRow = (props) => {

  const { firstName, lastName, discount, phoneNumber, numberOfBookings } = props.customer;
  const url = "customers/" + props.customerId;

  return (
    <tr>
      <td><a href={url}>{firstName} {lastName}</a></td>
      <td>{discount}%</td>
      <td>{phoneNumber}</td>
      <td>{numberOfBookings}</td>
      </tr>
  );
}

export default CustomerRow;
