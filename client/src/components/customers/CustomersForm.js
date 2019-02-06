import React from 'react';
import Request from '../../helpers/requestHelper.js';

const CustomersForm = () => {

  function handleSubmit(event){
    event.preventDefault();
    const newCustomer = {
      "firstName": event.target.firstName.value,
      "lastName": event.target.lastName.value,
      "phoneNumber": event.target.phoneNumber.value,
      "discount": event.target.discount.value
    };

    const request = new Request();
    request.post('/customers', newCustomer).then(() => {
      window.location = '/customers';
    })
  }

  return (<form onSubmit={handleSubmit}>
    <input type="text" name="firstName" placeholder="First Name" required="true"/>
    <input type="text" name="lastName" placeholder="Surname" required="true"/>
    <input type="text" name="phoneNumber" placeholder="Phone Number" required="true"/>
    <input type="number" name="discount" placeholder="% Discount" min="0" max="100" required="true"/>
    <input type="submit" value="Add New Customer"/>
  </form>);
}

export default CustomersForm;
