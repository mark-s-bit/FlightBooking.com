import React from "react";
import NavigationBar from "./NavigationBar";
import "./Homepage.css";

function HomePage() {
  return (
    <div className="HomeContainer">
      <NavigationBar />
      <div className="ContentContainer">
        <img
          src="https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="HeaderImage"
        />
        <p className="MainText">
          Fly High Pay Low: TravelTicketPro flight Booking Experience
          <p>Experience limitless flights with TravelTicketPro booking!</p>
        </p>
        <p className="SubHeader">Simplifying Your Travel Arrangements</p>
        <div>
          <img
            className="SecondImage"
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
