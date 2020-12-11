import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
      <div className="NavBar">
          <Link to="/">Home</Link>
          <Link to="/judge">Judge Dogs</Link>
          <Link to="/search/labradoodle">Search Labradoodle</Link>
      </div>
  );
}

export default NavBar;