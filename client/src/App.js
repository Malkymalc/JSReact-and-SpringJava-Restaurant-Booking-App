import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './layout/Header.js'
import './App.css';

class App extends Component {

  constructor(props){
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
          url: '/tables',
          name: 'Tables'
        },
        {
          url: '/reports',
          name: 'Reports'
        },
        {
          url: '/admin',
          name: 'Admin'
        },
      ]
    }
  }


  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <NavBar links={this.state.links}/>
            <Switch>
              <Route exact path="/bookings" component={BookingsContainer} />
              <Route exact path="/customers" component={CustomersContainer} />
              <Route exact path="/tables" component={TablesContainer} />
              <Route exact path="/reports" component={ReportsContainer} />
              <Route exact path="/admin" component={AdminContainer} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
