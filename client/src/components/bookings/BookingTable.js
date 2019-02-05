import React, { Component, Fragment } from 'react';
import BookingRow from './BookingRow.js';

export default class BookingTable extends Component {


  render(){

    const tableRows = this.props.tables.map((table, index) => {
      return <BookingRow table={table} key={index}/>
    })

  return(
    <>
    <tbody>
    {tableRows}
    </tbody>
    </>
  )}
};
