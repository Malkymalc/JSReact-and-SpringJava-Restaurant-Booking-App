import React, { Component, Fragment } from 'react';
import BookingRow from './BookingRow.js';

export default class BookingTable extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(data){
    this.props.handleClick(data);
  }

  render(){
    if (!this.props.date) {return null;}
    const tableRows = this.props.tables.map((table, index) => {
      return <BookingRow table={table} key={index} date={this.props.date} handleClick={this.handleClick}/>
    })

  return(
    <>
    <tbody>
    {tableRows}
    </tbody>
    </>
  )}
};
