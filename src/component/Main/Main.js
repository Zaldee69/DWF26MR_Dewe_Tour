import { Container } from "react-bootstrap";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  const admin = JSON.parse(localStorage.getItem("admin_login"));
  const dataTrip = JSON.parse(localStorage.getItem("data_trip"));

  return (
    <div>
      <Container fluid className="main-container px-0 py-0 ">
        <img
          className="hibiscus-img"
          src="assets/hibiscus.png"
          alt="hibiscus"
        ></img>
        <img className="palm-img" src="assets/palm.png" alt="hibiscus"></img>
        {admin?.isAdmin ? (
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
        <div className="container-fluid container-group  d-flex gap-5 flex-wrap ">
          {dataTrip.map((el, i) => {
            return (
              <div key={i} className="container content-container rounded mt-3">
                <p className="apa ">24/17</p>
                <Link to={`/detail-trip/${el.id}`}>
                  <img src={`/assets/${el.image}`} alt="japan"></img>
                </Link>
                <h3>
                  {el.day}D/{el.night}N {el.titleTrip}
                </h3>
                <div className="price-container d-flex justify-content-between">
                  <p>IDR. {el.price}</p>
                  <small>{el.country}</small>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Main;
