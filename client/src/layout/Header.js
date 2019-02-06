import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {

  const links = props.links.map((link, index) => {
    return (
      <Link className="nav-item" to={link.url} index={index} key={index}>{link.name}</Link>
    );
  });

  return (
    <Fragment>
      <ul className="header">
        <a href="http://localhost:3000/bookings"><li ><i className="fas fa-beer"></i>  Booze & Food</li></a>
        <li className="navigation">{links}</li>
      </ul>
    </Fragment>
  );

}

export default Header;
