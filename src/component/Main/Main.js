import { Container } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { API } from "../../config/api";
import { AuthContext } from "../../context/AuthContextProvider";
import Header from "../Header/Header";
import GroupTour from "../../component/Items/GroupTourCard/GroupTour";

function Main() {
  const { state } = useContext(AuthContext);
  const [trip, setTrip] = useState([]);

  const [search, setSearch] = useState("");

  // Fetching trip data from database
  const getTrip = async () => {
    try {
      const response = await API.get("/trip");
      // Store trip data to useState variabel
      setTrip(response.data.data);
      console.log(trip);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTrip();
  }, []);

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Container
        fluid
        className={`main-container ${
          state.user.user?.role === "admin" || search
            ? "admin-style"
            : "user-style"
        }  `}
      >
        <img
          className="hibiscus-img"
          src="assets/hibiscus.png"
          alt="hibiscus"
        ></img>
        <img className="palm-img" src="assets/palm.png" alt="hibiscus"></img>
        {state.user.user?.role === "admin" ? (
          <div className="title-container d-flex mx-auto justify-content-between">
            <h1 className="income-trip">Income Trip</h1>
            <Link to="/addtrip">
              <button className="btn add-btn btn btn-warning text-light fw-bold">
                Add Trip
              </button>
            </Link>
          </div>
        ) : (
          <>
            <h1 className="group-title text-center pb-4">Group Tour</h1>
          </>
        )}
        <GroupTour trip={trip} search={search} />
      </Container>
    </>
  );
}

export default Main;
