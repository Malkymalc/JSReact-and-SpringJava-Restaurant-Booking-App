import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {

  const links = props.links.map((link, index) => {
    return (
      <Link class="nav-item" to={link.url} index={index} key={index}>{link.name}</Link>
    );
  });

  return (
    <Fragment>
      <ul class="header">
        <li>Booze&Food</li>
        <li class="navigation">{links}</li>
      </ul>
    </Fragment>
  );

}

export default Header;
