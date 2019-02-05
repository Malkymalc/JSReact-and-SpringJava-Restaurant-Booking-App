import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './layout/Header.js'
import AdminContainer from './containers/AdminContainer.js'
import BookingsContainer from './containers/BookingsContainer.js'
import CustomersContainer from './containers/CustomersContainer.js'
import ReportsContainer from './containers/ReportsContainer.js'
import TablesContainer from './containers/TablesContainer.js'

import './App.css';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
      ],
      name: 'Cat in the Hat',
      age: '',
      multiline: 'Controlled',
      currency: 'EUR'
    }
  }



  render() {

    const { classes } = this.props;

    return (
      <div>
        <Router>
          <Fragment>
            <Header links={this.state.links} />
            <Switch>
              <Route exact path="/bookings" component={BookingsContainer} />
              <Route exact path="/customers" component={CustomersContainer} />
              <Route exact path="/tables" component={TablesContainer} />
              <Route exact path="/reports" component={ReportsContainer} />
              <Route exact path="/admin" component={AdminContainer} />
            </Switch>
            {/* Material Component */}
            <TextField
              id="standard-name"
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
            />

          </Fragment>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;
