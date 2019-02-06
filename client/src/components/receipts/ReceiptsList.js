import React, {Component} from 'react';
import Receipt from './Receipt.js';
import ReceiptsTableHeader from './ReceiptsTableHeader.js';

const ReceiptList = (props) => {

  console.log(props);
  if (!props.customer) {return null;}
  let receiptElements;
  if (props.customer._embedded){
    receiptElements = props.customer._embedded.bookings.map((booking, index) => {
    return <Receipt booking={booking}/>
  })}
  return (<>
  <table>
  <ReceiptsTableHeader/>
  <tbody>
  {receiptElements}
  </tbody>
  </table>
  </>);

}

export default ReceiptList;
