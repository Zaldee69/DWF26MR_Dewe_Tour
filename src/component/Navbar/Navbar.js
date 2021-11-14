//Styling
import "./Navbar.css";

//Bootstrap
import { DropdownButton, Dropdown } from "react-bootstrap";

//Hooks
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

//Link
import { Link } from "react-router-dom";

//Image
import Image from "../../img/Icon1.png";

//Auth Component
import Login from "../../component/Items/modal/Login";
import Register from "../Items/modal/Register";

//Dropdown Component
import AdminDropdown from "../Items/dropdown/AdminDropdown";
import DropdownComp from "../Items/dropdown/DropdownComp";

function Navbar() {
  //useState for login modal
  const [modal, setModal] = useState(false);
  //useState for register modal
  const [registerModal, setRegisterModal] = useState(false);
  //Global state
  const { state } = useContext(AuthContext);

  //Open modal function
  const openModalLogin = () => {
    setModal(true);
    setRegisterModal(false);
  };

  const openModalRegister = () => {
    setRegisterModal(true);
    setModal(false);
  };

  //Close modal function
  const closeModalLogin = () => setModal(false);
  const closeModalRegister = () => setRegisterModal(false);

  return (
    <div className="nav">
      <div className="nav-logo">
        <Link to="/">
          <img src={Image} alt="dewe tour" />
        </Link>
      </div>

      <div className={`nav-title position-relative `}>
        {state.isLogin ? (
          state.user.user?.role === "admin" ? (
            <AdminDropdown />
          ) : (
            <DropdownComp />
          )
        ) : (
          <ul>
            <li>
              <a onClick={openModalLogin} className="btn-one" href="#">
                Login
              </a>
              <Login
                modalLogin={modal}
                closeModalLogin={closeModalLogin}
                setRegisterModal={setRegisterModal}
                openModalRegister={openModalRegister}
              />
              <Register
                closeModalRegister={closeModalRegister}
                setRegisterModal={setRegisterModal}
                registerModal={registerModal}
                openModalLogin={openModalLogin}
              />
            </li>
            <li>
              <a className="btn-two" onClick={openModalRegister} href="">
                Register
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
