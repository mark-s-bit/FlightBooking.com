import React from "react";
import NavigationBar from "./NavigationBar";
function HomePage() {
  return (
    <div
      className="HomeContainer"
      style={{
        borderTopLeftRadius: "1%",
        borderTopRightRadius: "1%",
        position: "relative",
        height: "87%",
        margin: "1% 1% 2% 1%",
        backgroundColor: "black",
      }}
    >
      <NavigationBar />
      <div
        style={{
          position: "relative",
          top: "2%",
          border: "5px",
          borderBlockColor: "white",
          height: "98%",
          backgroundColor: "#1E1D1B",
          margin: "2%",
          borderTopLeftRadius: "1%",
          borderTopRightRadius: "1%",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          style={{
            height: "37%",
            width: "100%",
            margin: "0px",
            borderRadius: "1%",
            filter: "brightness(30%) ",
          }}
        />{" "}
        <p
          className="fs-4 fs-md-3 fs-lg-2"
          style={{
            fontSize: "30px",
            color: "white",
            position: "absolute",
            top: "10%",

            marginLeft: "10%",
          }}
        >
          Fly High Pay Low: TravelTicketPro flight Booking Experience
          <p></p>Experince limitless flights with travel ticketpro booking!
        </p>
        <p
          style={{
            color: "white",
            marginLeft: "30%",
            fontSize: "150%",
            textDecoration: "underline",
          }}
        >
          Simplifying Your Travel Arrangements
        </p>
        <div>
          <img
            style={{
              height: "40%",
              width: "50%",
              margin: "0px",
              borderRadius: "3%",
            }}
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
