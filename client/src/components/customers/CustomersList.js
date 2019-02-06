import React, { Fragment } from 'react';
import Customer from './Customer.js';
import CustomerTableHeader from './CustomerTableHeader.js';

const CustomersList = (props) => {

  const customers = props.customers.map((customer, index) =>{
    return (
      <Customer
        customer={customer}
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
