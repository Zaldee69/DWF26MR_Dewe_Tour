import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";

import "./DetailTrip.css";

function DetailTrip() {
  const [counter, setCounter] = useState(0);

  const dataTrip = JSON.parse(localStorage.getItem("data_trip"));
  const params = useParams();

  return (
    <>
      <Navbar />
      {dataTrip.map((el, i) => {
        return dataTrip[i].id == params.id ? (
          <div className="detail-tour container-fluid">
            <img className="hibiscus-img" src="/assets/hibiscus.png"></img>
            <img className="palm-img" src="/assets/palm.png"></img>
            <div className="detail-tour-title">
              <h1 className="text-dark fw-bold fs-1">{el.titleTrip}</h1>
              <small className="fs-4">{el.country}</small>
            </div>
            <div className="container-fluid img-container">
              <div className="container d-flex flex-column gap-3 justify-content-center">
                <img className="image-1" src={`/assets/${el.image}`}></img>
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
                      <h1 className="fs-5 pt-2 ">{`Hotel ${el.night} Night`}</h1>
                    </div>
                  </div>
                  <div>
                    <small>Transportation</small>
                    <div className="d-flex img gap-2">
                      <img src="/assets/vector1.png"></img>
                      <h1 className="fs-5 pt-2 ">{el.transportation}</h1>
                    </div>
                  </div>
                  <div>
                    <small>Eat</small>
                    <div className="d-flex img gap-2">
                      <img src="/assets/meal.png"></img>
                      <h1 className="fs-5 pt-2 ">{el.eat}</h1>
                    </div>
                  </div>
                  <div>
                    <small>Duration</small>
                    <div className="d-flex img gap-2">
                      <img src="/assets/time.png"></img>
                      <h1 className="fs-5 pt-2 ">{`${el.day} Day ${el.night} Night`}</h1>
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
                <small className="fw-bold ">Lorem Ipsum</small> is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className="container book-container ">
              <div className="d-flex justify-content-between border-bottom border-3 pb-2">
                <h2 className="fs-2 text-warning">
                  IDR. {el.price} <span className="text-dark">/ Person</span>
                </h2>
                <div className="d-flex gap-3 align-items-center">
                  <img
                    onClick={() => counter > 0 && setCounter(counter - 1)}
                    src="/assets/Minus.png"
                  ></img>
                  <p className="m-auto fw-bold fs-4 pt-2">{counter}</p>
                  <img
                    onClick={() => setCounter(counter + 1)}
                    src="/assets/Plus.png"
                  ></img>
                </div>
              </div>
              <div className=" d-flex justify-content-between pt-3 border-bottom border-3 pb-2">
                <h2>Total :</h2>
                <h2 className="text-warning">IDR. {el.price * counter}</h2>
              </div>

              <button className="btn btn-warning text-light px-4 py-2  fw-bold mt-4">
                <Link to={`/detail-trip/payment/${params.id}`}>Book Now</Link>
              </button>
            </div>
            <Footer />
          </div>
        ) : (
          <div></div>
        );
      })}
    </>
  );
}

export default DetailTrip;
