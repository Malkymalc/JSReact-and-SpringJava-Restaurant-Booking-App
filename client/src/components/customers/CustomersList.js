import React, { Fragment } from 'react';
import Customer from './Customer.js';

const CustomersList = (props) => {

  const customers = props.customers.map((customer, index) =>{
    return (
      <Customer
        customer={customer}
        index={index}
      />
    );
  })

  return (
    <Fragment>
      { customers }
    </Fragment>
  );
}

export default CustomersList;
