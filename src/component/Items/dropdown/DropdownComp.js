import React from "react";
import "./DropdownComp.css";
import User from "../../../img/user 2.png";
import Payment from "../../../img/Vector.png";
import Logout from "../../../img/logout.png";
import Polygon from "../../../img/Polygon.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContextProvider";

function DropdownComp() {
  const { state, dispatch } = useContext(AuthContext);
  const logOutHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <>
      <div className="dropdown p-5 ">
        <img alt={Polygon} className="polygon" src={Polygon} />
        <div className="small-profile">
          <img src={state.user.user?.image} alt="Profile" />
        </div>

        <div className="dropdown-content py-3 px-3">
          <div className="desc d-flex flex-column gap-4">
            <div className="d-flex align-items-center gap-2">
              <img alt={User} src={User}></img>
              <Link to="/user/profile">
                <a href className="fw-bold text-dark">
                  Profile
                </a>
              </Link>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img alt={Payment} src={Payment}></img>
              <Link to="/payment">
                <a href className="fw-bold text-dark">
                  Pay
                </a>
              </Link>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img
                style={{ width: "30px", height: "30px" }}
                alt=""
                src="/assets/he.png"
              ></img>
              <Link to="/wishlist">
                <a href className="fw-bold text-dark">
                  Wishlist
                </a>
              </Link>
            </div>
            <div
              onClick={logOutHandler}
              className="d-flex align-items-center po-hover gap-2"
            >
              <img alt={Logout} src={Logout}></img>
              <a href className="fw-bold text-dark">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropdownComp;
