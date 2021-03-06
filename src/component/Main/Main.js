import React from "react";
import { Container } from "react-bootstrap";
import "./Main.css";
import Data from "../../data/Data.json";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <div>
      <Container fluid className="main-container ">
        <img
          className="hibiscus-img"
          src="assets/hibiscus.png"
          alt="hibiscus"
        ></img>
        <img className="palm-img" src="assets/palm.png" alt="hibiscus"></img>
        <h1 className="group-title">Group Tour</h1>
        <div className="container-fluid container-group mt-5 d-flex gap-5 flex-wrap ">
          {Data.map((el) => {
            let path = `assets/${el.image}`;
            return (
              <div className="container rounded mt-3">
                <img src={path} alt="japan"></img>
                <h3>
                  {el.day}D/{el.nigth}N {el.destination}
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
