import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './layout/Header.js';
import Footer from './layout/Footer.js';
import BookingsContainer from './containers/BookingsContainer.js';
import CustomersContainer from './containers/CustomersContainer.js';
import CustomersForm from './components/customers/CustomersForm.js';
import Customer from './components/customers/Customer.js';
import ReceiptsContainer from './containers/ReceiptsContainer.js';
import BookingFormContainer from './containers/BookingFormContainer.js';
import Booking from './components/bookings/Booking.js';;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          url: '/bookings',
          name: 'Bookings'
        },
        {
          url: '/customers',
          name: 'Customers'
        },
        {
          url: '/receipts',
          name: 'Receipts'
        },
      ]
    }
  }


  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Header links={this.state.links} />
            <div className="content-body-background">
              <div className="content-body">
                <Switch>
                  <Route exact path="/" component={BookingsContainer}/>
                  <Route exact path="/bookings" component={BookingsContainer} />
                  <Route exact path="/customers" component={CustomersContainer} />
                  <Route exact path="/customers/new" component={CustomersForm} />
                  <Route exact path="/customers/:id" component={Customer} />
                  <Route exact path="/receipts" component={ReceiptsContainer} />
                  <Route exact path="/bookings/new" component={BookingFormContainer} />
                  <Route exact path="/bookings/:id" component={Booking} />
                </Switch>
              </div>
            </div>
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
