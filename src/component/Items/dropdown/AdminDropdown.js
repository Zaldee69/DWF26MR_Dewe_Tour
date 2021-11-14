import React from "react";
import "./DropdownComp.css";
import Logout from "../../../img/logout.png";
import Polygon from "../../../img/Polygon.png";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContextProvider";
import { API } from "../../../config/api";

function AdminDropdown() {
  const { state, dispatch } = useContext(AuthContext);
  const [transactions, setTransactions] = useState();

  const logOutHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGOUT",
    });
  };

  const getTransactions = async () => {
    try {
      const response = await API.get("/transactions/pending");

      setTransactions(response.data.data);

      console.log(transactions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <div className="dropdown p-5  ">
        <img alt={Polygon} className="polygon " src={Polygon} />

        <div className="small-profile position-relative">
          <img src={state.user.user?.image} alt="Profile" />
          {transactions?.length !== 0 && (
            <p className="count-1">{transactions?.length}</p>
          )}
        </div>
        <div className="dropdown-content py-3 px-3">
          <div className="desc d-flex flex-column gap-4">
            <div className="d-flex align-items-center gap-2">
              <img alt="" src="/assets/journey1.png"></img>
              <Link to="/list-transaction">
                <a href className="fw-bold text-dark">
                  Trip
                </a>
              </Link>
              {transactions?.length !== 0 && (
                <p className="count">{transactions?.length}</p>
              )}
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

export default AdminDropdown;
