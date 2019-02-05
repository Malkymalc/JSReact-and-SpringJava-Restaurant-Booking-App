import React, { Fragment } from 'react';
import Customer from './Customer.js';
import CustomerTableHeader from './CustomerTableHeader.js';

const CustomersList = (props) => {

  const customers = props.customers.map((customer, index) =>{
    return (
      <Customer
        customer={customer}
<<<<<<< HEAD
=======
        index={index}
>>>>>>> 0d40151189b27bd82d2d577449dfc4179302bae4
        key={index}
      />
    );
  })

  return (
    <Fragment>
      <CustomerTableHeader/>
      { customers }
    </Fragment>
  );
}

export default CustomersList;
