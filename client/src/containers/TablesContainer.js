import React, {Component} from 'react';
import TablesList from '../components/tables/TablesList.js';
import Request from '../../helpers/request.js';


class TablesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tables: []
    }
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/tables').then(data => {
      this.setState({tables: data._embedded.tables})
    })
  }

  getBookings(){

  }


  render(){
    return (
        <TablesList tables={this.state.tables}/>
    );
  }
}

export default TablesContainer;
