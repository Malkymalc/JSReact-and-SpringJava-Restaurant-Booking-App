import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Customer = (props) => {

  const { firstName, lastName, discount, phoneNumber } = props.customer;

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{discount}%</td>
      <td>{phoneNumber}</td>
      </tr>
  );
}

export default Customer;
