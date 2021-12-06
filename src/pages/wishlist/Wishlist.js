import { useState, useEffect, useContext } from "react";
import { Container, Button } from "react-bootstrap";
import Navbar from "../../component/Navbar/Navbar";
import "./Wishlist.css";
import { API } from "../../config/api";
import { AuthContext } from "../../context/AuthContextProvider";
import RupiahFormat from "../../utils/RupiahFormat";
import toast, { Toaster } from "react-hot-toast";

const Wishlist = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { state } = useContext(AuthContext);

  const successNotify = (str) => toast.success(str);
  const loadingNotify = () => toast.loading("Waiting...");

  const getWishlist = () => {
    API.get("/wishlist").then((res) => {
      setIsLoading(true);
      setData(res.data.trip);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getWishlist();
  }, []);

  const deleteWishlist = (id) => {
    API.delete(`/wishlist/${id}`).then((res) => {
      getWishlist();
    });
  };

  const bookingHandler = (id, price, index) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const bookingData = {
      counterQty: counter,
      total: counter * price,
      trip: id,
      user: state.user.user.id,
    };

    const quota = {
      quota_filled: data[index].quota_filled + counter,
    };
    loadingNotify();
    API.post("/transaction", bookingData, config).then((res) => {
      successNotify("Booking trip success");
      setCounter(0);
    });

    API.patch("/trip/" + id, quota, config);
  };

  return (
    <Container fluid>
      <Navbar />
      <Container className="wishlist-container mx-auto">
        <div className="d-inline-flex gap-1 title-container ">
          <img alt="" src="/assets/hersol.png"></img>
          <h1 className="text-warning">Wishlist</h1>
        </div>
        <div className="d-flex justify-content-center flex-row gap-4 flex-wrap ">
          {!isLoading &&
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="trip-image-container position-relative d-flex gap-1 pb-2 flex-column mt-5"
                >
                  <div className="bg-light love-container position-absolute rounded p-1 rounded-circle">
                    <img
                      onClick={() => deleteWishlist(item.wishlistId)}
                      style={{ width: "22px", height: "22px" }}
                      src="/assets/sol.png"
                      alt=""
                    ></img>
                  </div>

                  <img alt="" src={item.image[0]}></img>
                  <h3 className="mb-0 px-2 pt-0">{item.title}</h3>
                  <h5 className="text-warning mb-0 px-2 pt-0">
                    IDR. {RupiahFormat(item?.price)}
                  </h5>

                  <p className="text-secondary px-2  fw-bold">
                    {item.countries.name}
                  </p>

                  <div className="d-flex flex-row gap-2 align-items-center px-2 justify-content-between">
                    <div className="counter-container">
                      <img
                        onClick={() => counter > 0 && setCounter(counter - 1)}
                        src="/assets/Minus.png"
                        alt=""
                      ></img>
                      <p>{counter}</p>
                      <img
                        onClick={() =>
                          setCounter(
                            counter < item.quota - item.quota_filled
                              ? counter + 1
                              : counter
                          )
                        }
                        src="/assets/Plus.png"
                        alt=""
                      ></img>
                    </div>
                    <Button
                      onClick={() => bookingHandler(item.id, item.price, index)}
                      className=" shadow-none rounded bg-transparent border-warning text-warning fw-bold flex-grow-1"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              );
            })}
        </div>
        <Toaster />
      </Container>
    </Container>
  );
};

export default Wishlist;
