import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <nav style={{ position: "relative", top: "4%", color: "white" }}>
      <ul style={{ display: "flex", marginLeft: "5%", listStyleType: "none" }}>
        <NavLink to={"/"}>
          {" "}
          <li
            style={{
              display: "flex",
              marginRight: "5%",
              color: "white",
              textDecoration: "none",
            }}
          >
            <i className="fa-solid fa-plane-departure"></i>
            TravelTicketPro
          </li>
        </NavLink>

        <NavLink to={"/"}>
          <li style={{ color: "white", marginLeft: "18%" }}>Home</li>
        </NavLink>
        <NavLink to={"/ticket"}>
          {" "}
          <li style={{ marginLeft: "18%" ,color:"white" }}>Ticket </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavigationBar;
