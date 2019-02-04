import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {

  const links = props.links.map((link, index) => {
    return (
      <Link to={link.url} index={index} key={index}>{link.name}</Link>
     );
  });

  return (
    <Fragment>
      <h1>Booze&Food</h1>
      {links}
    </Fragment>
  );

}

export default Header;
