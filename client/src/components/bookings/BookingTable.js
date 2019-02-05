import React, { Component, Fragment } from 'react';
import BookingRow from './BookingRow.js';

export default class BookingTable extends Component {


  render(){
    if (!this.props.date) {return null;}
    const tableRows = this.props.tables.map((table, index) => {
      return <BookingRow table={table} key={index} date={this.props.date}/>
    })

  return(
    <>
    <tbody>
    {tableRows}
    </tbody>
    </>
  )}
};
