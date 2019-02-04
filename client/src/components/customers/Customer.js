import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Customer = (props) => {

  const { firstName, lastName, discount, phoneNumber } = props.customer;

  return (
    <Fragment>
      <li>First Name: {firstName}</li>
      <li>Last Name: {lastName}</li>
      <li>Discount: {discount}</li>
      <li>Phone Number: {phoneNumber}</li>
    </Fragment>
  );
}

export default Customer;
