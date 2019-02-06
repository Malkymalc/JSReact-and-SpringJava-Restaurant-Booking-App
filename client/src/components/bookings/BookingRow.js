import React, { Component } from 'react';

export default class BookingRow extends Component {

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

  test(data){
    window.location = "/bookings/" + data.target.title;
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
      tableElements.push(<td className={cName} key={i} onClick={this.test} title={contentURL}><a href = {contentURL}>{covers}</a></td>);
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
