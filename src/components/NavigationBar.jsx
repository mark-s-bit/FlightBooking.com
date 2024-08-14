import React from "react";
import { NavLink } from "react-router-dom";
import './NavigationBar.css'; // Import the CSS file

function NavigationBar() {
  return (
    <nav>
      <ul>
        <NavLink to={"/"} className="nav-link">
          <li className="nav-logo">
            <i className="fa-solid fa-plane-departure"></i>
            TravelTicketPro
          </li>
        </NavLink>

        <NavLink to={"/"} className="nav-link">
          <li>Home</li>
        </NavLink>
        <NavLink to={"/ticket"} className="nav-link">
          <li>Ticket</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavigationBar;
