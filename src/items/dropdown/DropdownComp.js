import React from "react";
import "./DropdownComp.css";
import ProfileImg from "../../img/elips.png";
import User from "../../img/user 2.png";
import Payment from "../../img/Vector.png";
import Logout from "../../img/logout.png";
import Polygon from "../../img/Polygon.png";
import { Link } from "react-router-dom";
function DropdownComp() {
  return (
    <>
      <div className="dropdown p-5 ">
        <img className="polygon" src={Polygon} />
        <img src={ProfileImg} alt="Profile" />
        <div className="dropdown-content py-3 px-3">
          <div className="desc d-flex flex-column gap-4">
            <div className="d-flex align-items-center gap-2">
              <img src={User}></img>
              <Link to="/user/profile">
                <a className="fw-bold text-dark">Profile</a>
              </Link>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src={Payment}></img>
              <Link to="/detail-trip/payment">
                <a className="fw-bold text-dark">Pay</a>
              </Link>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src={Logout}></img>
              <Link to="/">
                <a className="fw-bold text-dark">Logout</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropdownComp;
