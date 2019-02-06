import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


class ModalBookingForm extends Component {

  render(){
    const { values, handleChange, handleCustomerSelect } = this.props;

    return (
      <Fragment >
        <p></p>
        <TextField
          select
          value={ values.customer ? values.customer.firstName : 'Choose Customer'}
          onChange={handleCustomerSelect}
          helperText="Select Customer"
        >
          {values.existingCustomers.map(customer => (
            <MenuItem key={customer.id} value={customer.id}>
              {customer.firstName + ' ' + customer.lastName}
            </MenuItem>
          ))}
        </TextField>

        <p></p>
        <TextField
          label="First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          required
        />
        <p></p>
        <TextField
          label='Last Name'
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
        />
        <p></p>
        <TextField
          label='Telephone'
          onChange={handleChange('telephone')}
          defaultValue={values.telephone}
        />
        <p></p>
        <TextField
          label='Discount'
          onChange={handleChange('discount')}
          defaultValue={values.discount}
        />
        <p></p>
        <TextField
          label='headCount'
          onChange={handleChange('headCount')}
          defaultValue={values.telephone}
        />

        <p></p>
        <TextField
          label='time'
          onChange={handleChange('time')}
          defaultValue={values.time}
          InputProps={{readOnly: true}}
        />
        <p></p>
        <TextField
          label='date'
          defaultValue={values.date}
          InputProps={{readOnly: true}}
        />
        <p></p>
        <TextField
          label='table'
          onChange={handleChange('headCount')}
          defaultValue={values.table.tableNumber}
          InputProps={{readOnly: true}}
        />
        <p></p>

          </Fragment>
          );
  }
}

export default ModalBookingForm;
