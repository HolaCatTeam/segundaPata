import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>

    <nav className="headerStyle">
          <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Upload">Upload</NavLink>

          </ul>
    </nav>
   </div>
  );
}


export default Navigation;
