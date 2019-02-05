import React, { Component } from 'react';

export default class BookingRow extends Component {

  generateBookingTimes() {
    let bookingHash = {};
    if (this.props.table._embedded) {
      this.props.table._embedded.bookings.forEach((booking) => {
        bookingHash[booking.time] = booking.id;
      })
    }

    return bookingHash;
  }

  render() {

    const timesBooked = this.generateBookingTimes();
    const tableElements = [];

    for (let i = 10; i < 22; i++) {
      const stringTime = i + ":00:00";
      let cName = "";
      let content;
      if (Object.keys(timesBooked).includes(stringTime)) {
        cName = "booked";
        const linkID = timesBooked[stringTime];
        content = <a href={"http://localhost:3000/bookings/" + linkID}><b>Booked</b></a>;
      } else {
        cName = "free";
        content = ""
      }
      tableElements.push(<td className={cName} key={i}>{content}</td>);
    }

    return (
      <tr>
        <td>{this.props.table.tableNumber}</td>
        <td class="cut-off">{this.props.table.seatCount}</td>
        {tableElements}
      </tr>
    )
  }
};
