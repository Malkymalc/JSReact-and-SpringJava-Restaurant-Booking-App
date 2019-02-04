import React, { Fragment } from 'react';

const Customer = (props) => {

  const { firstName, lastName, discount, phoneNumber } = props.customer;

  return (
    <Fragment>
      <li>First Name: {firstName}</li>
      <li>Last Name: {secondName}</li>
      <li>Discount: {discount}</li>
      <li>Phone Number: {phoneNumber}</li>
    </Fragment>
  );
}

export default Customer;
