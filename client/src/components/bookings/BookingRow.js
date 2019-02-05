import React, { Component } from 'react';

export default class BookingRow extends Component {

  generateBookingTimes() {
    if (!this.props.table._embedded) { return []; }
    return this.props.table._embedded.bookings.map((booking) => {
      return booking.time;
    })
  }

  render() {

    const timesBooked = this.generateBookingTimes();
    const tableElements = [];

    for (let i = 10; i < 22; i++) {
      const stringTime = i + ":00:00";
      let cName = "";
      if (timesBooked.includes(stringTime)) {
        cName = "booked";
      } else {
        cName = "free";
      }
      tableElements.push(<td className={cName} key={i}></td>);
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
