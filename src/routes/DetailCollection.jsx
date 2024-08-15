import { useState, useEffect } from "react";
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
    total: "",
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch("http://localhost:3000/flights");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFlights(data);
        if (data.length > 0) {
          setFormData({
            from: data[0].from,
            to: data[0].to,
            date: data[0].date,
            total: `$${data[0].cost}`,
          });
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const back = useNavigate();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <nav className="navbar">
        <NavLink to={'/'}>
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
              value={formData.from}
              readOnly
            />
            <input
              name="to"
              type="text"
              value={formData.to}
              readOnly
            />
          </div>
          <div className="form-row">
            <input
              name="date"
              type="date"
              value={formData.date}
              readOnly
            />
          </div>
          <div className="form-row">
            <label>No. of people</label>
            <input name="people" type="number" onChange={handleChange} min="1" />
          </div>
          <div className="form-row">
            <label>Bags</label>
            <input name="bags" type="number" onChange={handleChange} min="0" />
          </div>
          <div className="form-row">
            <label htmlFor="class">Class</label>
            <input list="classes" name="class" id="class" onChange={handleChange} />
            <datalist id="classes">
              <option value="First Class" />
              <option value="Economy" />
              <option value="Business" />
            </datalist>
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
              value={formData.total}
              readOnly
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
