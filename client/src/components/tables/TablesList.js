import React, { Fragment } from 'react';
import Table from './Table.js';

const TablesList = (props) => {

  const tables = props.tables.map((table, index) =>{
    return (
      <Table
        table={table}
        index={index}
        key={index}
      />
    );
  })

  return (
    <Fragment>
      { tables }
    </Fragment>
  );
}

export default TablesList;
