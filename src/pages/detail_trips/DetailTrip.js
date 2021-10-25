import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Data from "../../data/Data.json";
import "./DetailTrip.css";

function DetailTrip() {
  const params = useParams();

  const title = `${Data[params.id - 1]?.day}D/${Data[params.id - 1]?.night}N
            ${Data[params.id - 1]?.destination}`;

  return (
    <>
      <Navbar />
      <div className="detail-tour container-fluid">
        <img className="hibiscus-img" src="/assets/hibiscus.png"></img>
        <img className="palm-img" src="/assets/palm.png"></img>
        <div className="detail-tour-title">
          <h1 className="text-dark fw-bold fs-1">{title}</h1>
          <small className="fs-5">{Data[params.id - 1]?.country}</small>
        </div>
        <div className="container-fluid img-container">
          <div className="container d-flex flex-column gap-3 justify-content-center">
            <img
              className="image-1 "
              src={`/assets/${Data[params.id - 1]?.image}`}
            ></img>
            <div className="d-flex gap-3">
              <img className="image-2" src="/assets/1.png"></img>
              <img className="image-3" src="/assets/3.png"></img>
              <img className="image-4" src="/assets/4.png"></img>
            </div>
            <h3 className="fs-5 fw-bold pt-5 pb-3">Information Trip</h3>
            <div className="d-flex gap-4">
              <div>
                <small>Accomodation</small>
                <div className="d-flex img gap-2">
                  <img src="/assets/hotel.png"></img>
                  <h1 className="fs-5 pt-2 ">{`Hotel ${
                    Data[params.id - 1]?.night
                  } Night`}</h1>
                </div>
              </div>
              <div>
                <small>Transportation</small>
                <div className="d-flex img gap-2">
                  <img src="/assets/vector1.png"></img>
                  <h1 className="fs-5 pt-2 ">
                    {Data[params.id - 1]?.transportation}
                  </h1>
                </div>
              </div>
              <div>
                <small>Eat</small>
                <div className="d-flex img gap-2">
                  <img src="/assets/meal.png"></img>
                  <h1 className="fs-5 pt-2 ">Included as Itenary</h1>
                </div>
              </div>
              <div>
                <small>Duration</small>
                <div className="d-flex img gap-2">
                  <img src="/assets/time.png"></img>
                  <h1 className="fs-5 pt-2 ">{`${
                    Data[params.id - 1]?.day
                  } Day ${Data[params.id - 1]?.night} Night`}</h1>
                </div>
              </div>
              <div>
                <small>Date Trip</small>
                <div className="d-flex img gap-2">
                  <img src="/assets/Vector4.png"></img>
                  <h1 className="fs-5 pt-2 ">1 January 2022</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container description-container">
          <h3 className="fw-bold">Description</h3>
          <p>
            <small className="fw-bold ">Lorem Ipsum</small> is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div className="container book-container ">
          <div className="d-flex justify-content-between border-bottom border-3 pb-2">
            <h2 className="fs-2 text-warning">
              IDR. 12.000.000 <span className="text-dark">/ Person</span>
            </h2>
            <div className="d-flex gap-3 align-items-center">
              <img src="/assets/Minus.png"></img>
              <p className="m-auto fw-bold fs-4 pt-2">1</p>
              <img src="/assets/Plus.png"></img>
            </div>
          </div>
          <div className=" d-flex justify-content-between pt-3 border-bottom border-3 pb-2">
            <h2>Total :</h2>
            <h2 className="text-warning">IDR. 12,000,000</h2>
          </div>

          <button className="btn btn-warning text-light px-4 py-2  fw-bold mt-4">
            <Link to={`/detail-trip/payment/${params.id}`}>Book Now</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailTrip;
