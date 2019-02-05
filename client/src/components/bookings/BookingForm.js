import React from 'react'

const BookingForm = (props) => {

  const customerOptions = props.customer.map((customer) => {
    return <option key={customer.id} value={customer._links.self.href}>{customer.lastName}</option>
  })

  const tableOptions = props.table.map((table) => {
    return <option key={table.id} value={table._links.self.href}>{table.tableNumber}</option>
  })

  const timeOptions = props.times.map((time, index) => {
    return <option key={index}>{time}</option>
  })

  function handleSubmit(event){
    event.preventDefault()
    const booking = {
      "date": event.target.date.value,
      "time": event.target.time.value,
      "headCount": event.target.headcount.value,
      "customer": event.target.customer.value,
      "table": event.target.table.value
    }
    props.handleBookingPost(booking)
  }

  return (
    <form onSubmit={handleSubmit}>
    <input type="date" placeholder="date" name="date"/>
    <select name="time">
      {timeOptions}
    </select>

    <input type="number" placeholder="headcount" name="headcount"/>
    <select name="customer">
      {customerOptions}
    </select>

    <select name="table">
      {tableOptions}
    </select>

    <button type="submit">Save</button>
    </form>
  )

}

export default BookingForm;
