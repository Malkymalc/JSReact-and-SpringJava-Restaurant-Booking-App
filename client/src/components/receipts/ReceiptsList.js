import React, {Component} from 'react';
import Receipt from './Receipt.js';

const ReceiptList = (props) => {

  console.log(props);
  if (!props.customer) {return null;}
  return (<h2>Loaded, motherfucker</h2>);
}

export default ReceiptList;
