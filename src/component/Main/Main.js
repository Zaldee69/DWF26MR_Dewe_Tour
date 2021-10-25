import { Container } from "react-bootstrap";
import "./Main.css";
import Data from "../../data/Data.json";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function Main() {
  const admin = localStorage.getItem("admin_login");
  const newAdmin = JSON.parse(admin);

  const loginState = JSON.parse(localStorage.getItem("user_login"));

  console.log(loginState);

  return (
    <div>
      <Container fluid className="main-container ">
        <img
          className="hibiscus-img"
          src="assets/hibiscus.png"
          alt="hibiscus"
        ></img>
        <img className="palm-img" src="assets/palm.png" alt="hibiscus"></img>
        {newAdmin?.isAdmin ? (
          <div>
            <h1 className="income-trip">Income Trip</h1>
            <Link to="/addtrip">
              <button className="btn add-btn btn btn-warning text-light fw-bold">
                Add Trip
              </button>
            </Link>
          </div>
        ) : (
          <>
            <h1 className="group-title">Group Tour</h1>
          </>
        )}
        <div className="container-fluid container-group mt-5 d-flex gap-5 flex-wrap ">
          {Data.map((el) => {
            let path = `assets/${el.image}`;
            let linkPath = `/detail-trip/${el.id}`;
            return (
              <div className="container content-container rounded mt-3">
                <Link to={linkPath}>
                  <img src={path} alt="japan"></img>
                </Link>
                <h3>
                  {el.day}D/{el.night}N {el.destination}
                </h3>
                <div className="price-container d-flex justify-content-between">
                  <p>IDR. {el.price}</p>
                  <small>{el.country}</small>
                </div>
              </div>
            );
          })}
        </div>

        <Footer />
      </Container>
    </div>
  );
}

export default Main;
