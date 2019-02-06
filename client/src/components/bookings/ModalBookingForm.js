import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


class ModalBookingForm extends Component {

  render(){
    const { values, handleChange, handleCustomerSelect } = this.props;

    return (
      <Fragment >
        <p>Hello</p>
        <TextField
          select
          value={(values.firstName + values.lastName) || 'Choose Customer'}
          onChange={handleCustomerSelect}
          helperText="Select Customer"
        >
          {values.existingCustomers.map(customer => (
            <MenuItem key={customer.id} value={customer.id}>
              {customer.firstName + ' ' + customer.lastName}
            </MenuItem>
          ))}
        </TextField>

        <p>Hello</p>
        <TextField
          label="First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
        />
        <p>Hello</p>
        <TextField
          label='Last Name'
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
        />
        <p>Hello</p>
        <TextField
          label='Telephone'
          onChange={handleChange('telephone')}
          defaultValue={values.telephone}
        />
        <p>Hello</p>
        <TextField
          label='Discount'
          onChange={handleChange('discount')}
          defaultValue={values.discount}
        />

        <p>Hello</p>
        <TextField
          label='time'
          onChange={handleChange('time')}
          defaultValue={values.time}
        />
        <p>Hello</p>
        <TextField
          label='date'
          onChange={handleChange('date')}
          defaultValue={values.date}
        />
        <p>Hello</p>
        <TextField
          label='headCount'
          onChange={handleChange('headCount')}
          defaultValue={values.telephone}
        />
        <p>Hello</p>
        <TextField
          label='Discount'
          onChange={handleChange('discount')}
          defaultValue={values.discount}
        />

          </Fragment>
          );
  }
}

export default ModalBookingForm;
