import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <nav style={{ position: "relative", top: "4%", color: "white" }}>
      <ul style={{ display: "flex", marginLeft: "5%", listStyleType: "none" }}>
        <li style={{ display: "flex", marginRight: "5%" }}>
          <i className="fa-solid fa-plane-departure"></i>
          <p> TravelTicketPro</p>
        </li>

        <li>Home</li>
        <li style={{ marginLeft: "3%" }}>Ticket </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
