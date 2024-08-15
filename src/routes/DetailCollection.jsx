import { useState } from "react";
import "./Details.css";
import logo from "../assets/logoo.png";
import NavigationBar from "../components/NavigationBar";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

function DetailCollection() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    people: "",
    bags: "",
    class: "",
    name: "",
    phone: "",
    passport: "",
    total: "$120000",
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const back = useNavigate();
  return (
    <div>
      <nav className="navbar">
       <NavLink to={'/'} >
        <div className="navbar-brand">
          <img src={logo} alt="TravelTicketPro Logo" className="nav-logo" />
          <span className="brand-name">TravelTicketPro</span>
        </div>
        </NavLink>
      </nav>
      <form onSubmit={handleSubmit} className="Detailcontainer">
        <div className="booking-form">
          <div className="form-row-horizontal">
            <input
              name="from"
              type="text"
              placeholder="From"
              onChange={handleChange}
            />
            <input
              name="to"
              type="text"
              placeholder="To"
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <input
              name="date"
              type="date"
              placeholder="24 Aug 2024 1200hrs"
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label>No. of people</label>
            <input name="people" type="number" onChange={handleChange} />
          </div>
          <div className="form-row">
            <label>Bags</label>
            <input name="bags" type="number" onChange={handleChange} />
          </div>
          <div className="form-row">
            <label>Class</label>
            <input name="class" type="text" onChange={handleChange} />
          </div>
          <div className="form-row">
            <label>Name</label>
            <input name="name" type="text" onChange={handleChange} />
          </div>
          <div className="form-row">
            <label>Phone NO.</label>
            <input name="phone" type="text" onChange={handleChange} />
          </div>
          <div className="form-row">
            <label>Passport No</label>
            <input name="passport" type="text" onChange={handleChange} />
          </div>
          <div className="form-row">
            <label>Total</label>
            <input
              name="total"
              type="text"
              className="total"
              placeholder="$120000"
              onChange={handleChange}
            />
          </div>
          <div className="form-buttons">
            <button
              onClick={() => back("/")}
              className="back-btn"
              type="button"
            >
              Back
            </button>
            <button type="submit">Book</button>
          </div>
        </div>
      </form>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        formData={formData}
      />
    </div>
  );
}

export default DetailCollection;
