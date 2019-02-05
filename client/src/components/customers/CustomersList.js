import React, { Fragment } from 'react';
import CustomerRow from './CustomerRow.js';
import CustomerTableHeader from './CustomerTableHeader.js';

const CustomersList = (props) => {

  const customers = props.customers
  .sort((a, b) => {return b.numberOfBookings - a.numberOfBookings;})
  .map((customer, index) =>{
    return (
      <CustomerRow
        customer={customer}
        customerId={customer.id}
        key={index}
      />
    );
  })

  return (
    <Fragment>
      <CustomerTableHeader/>
      <tbody>
      { customers }
      </tbody>
    </Fragment>
  );
}

export default CustomersList;
