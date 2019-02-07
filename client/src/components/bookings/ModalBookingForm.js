import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


class ModalBookingForm extends Component {

  render(){
    const { values, handleChange, handleCustomerSelect } = this.props;
    let defaultName
    if (values.customer !== null) {
      defaultName = values.customer.firstName;
    } else {
      defaultName = "Choose Customer";
    }
    return (
      <Fragment >
        <p></p>
        <TextField
          select
          value={defaultName}
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
          label='headCount'
          onChange={handleChange('headCount')}
          defaultValue={values.headCount}
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
