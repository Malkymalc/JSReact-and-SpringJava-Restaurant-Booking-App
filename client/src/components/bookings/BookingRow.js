import React, { Component } from 'react';

export default class BookingRow extends Component {

  constructor(props){
    super(props);
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }

  generateBookingTimes() {
    let bookingHash = {};
    if (this.props.table._embedded) {
      this.props.table._embedded.bookings.forEach((booking) => {
        if(booking.date == this.props.date){
        bookingHash[booking.time] = booking.id;
      }
      })
    }

    return bookingHash;
  }

  handleClickOpen(event){
    console.log(event.target);
    this.props.handleClick(event.target);
  }

  render() {

    const timesBooked = this.generateBookingTimes();
    const tableElements = [];

    for (let i = 10; i < 22; i++) {
      const stringTime = i + ":00";
      let cName;
      let contentURL;
      let covers;
      if (Object.keys(timesBooked).includes(stringTime)) {
        cName = "booked";
        const linkID = timesBooked[stringTime];
        contentURL = `${linkID}`
      } else {
        cName = "free";
        contentURL = "new"
      }
      tableElements.push(<td className={cName} table={this.props.tableindex} time={stringTime} date={this.props.date} key={i} onClick={this.handleClickOpen} title={contentURL}></td>);
    }

    return (
      <tr>
        <td>{this.props.table.tableNumber}</td>
        <td className="cut-off">{this.props.table.seatCount}</td>
        {tableElements}
      </tr>
    )
  }
};
