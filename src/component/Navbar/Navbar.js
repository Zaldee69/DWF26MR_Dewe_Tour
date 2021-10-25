import React from "react";
import "./Navbar.css";
import { useState, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropdownComp from "../../items/dropdown/DropdownComp";
import Image from "../../img/Icon1.png";
import Image2 from "../../img/palm1.png";
import { AuthContext } from "../../context/AuthContextProvider";
import AdminDropdown from "../../items/dropdown/AdminDropdown";

const a = [];

function Navbar() {
  const [modal, setModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const { state, dispatch } = useContext(AuthContext);

  const [register, setRegister] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
  });

  //////
  const user = localStorage.getItem("user");
  const newUser = JSON.parse(user);
  //////
  const userLogin = localStorage.getItem("user_login");
  const newUserLogin = JSON.parse(userLogin);
  /////
  const admin = localStorage.getItem("admin");
  const newAdmin = JSON.parse(admin);
  /////
  const adminLogin = localStorage.getItem("admin_login");
  const newAdminLogin = JSON.parse(adminLogin);

  const registerSubmitHandler = (e) => {
    a.push(register);
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(a));
  };

  const registerOnChangeHandler = (e) => {
    setRegister((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginHandler = (e) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    dispatch({
      type: "AUTH",
      payload: {
        email: register.email,
        password: register.password,
        fullname: register.fullname,
        phone: register.phone,
      },
    });
    dispatch({
      type: "ADMIN_AUTH",
      payload: {
        email: register.email,
        password: register.password,
        fullname: register.fullname,
        phone: register.phone,
      },
    });
    newUser.forEach((el, i) => {
      if (email === newUser[i].email && password === newUser[i].password) {
        console.log("from el :", el + "from newUser :", newUser);
        if (newUser[i].email === "admin@gmail.com") {
          dispatch({
            type: "ADMIN_LOGIN",
            payload: {
              email: register.email,
              password: register.password,
              fullname: register.fullname,
              phone: register.phone,
            },
          });
        }
        dispatch({
          type: "LOGIN",
          payload: {
            email: register.email,
            password: register.password,
            fullname: register.fullname,
            phone: register.phone,
          },
        });
      }
    });

    e.preventDefault();
  };

  const openModalLogin = () => {
    setModal(true);
    setRegisterModal(false);
  };

  const openModalRegister = () => {
    setRegisterModal(true);
    setModal(false);
  };

  const closeModalLogin = () => setModal(false);
  const closeModalRegister = () => setRegisterModal(false);

  return (
    <div>
      <div className="nav">
        <div className="nav-logo">
          <Link to="/">
            <img src={Image} alt="dewe tour" />
          </Link>
        </div>
        <div className={`nav-title `}>
          {newAdminLogin?.isLogin || newUserLogin?.isLogin ? (
            newAdminLogin?.isAdmin ? (
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
                <Modal show={modal}>
                  <Modal.Body className="modal-content">
                    <img src={Image2}></img>
                    <h2 className="text-center my-5">Login</h2>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={closeModalLogin}
                    ></button>
                    <Form>
                      <Form.Group className="mb-4">
                        <Form.Label className="fw-bold">
                          Email address
                        </Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          id="email"
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label className="fw-bold">Password</Form.Label>
                        <Form.Control
                          name="password"
                          type="password"
                          required
                          id="password"
                        />
                      </Form.Group>
                      <div class="d-flex flex-column gap-2 ">
                        <Button
                          onClick={loginHandler}
                          className="text-white fw-bold"
                          variant="warning"
                          type="submit"
                          required
                        >
                          Submit
                        </Button>
                        <small className="text-center">
                          Don't have an account ? click{" "}
                          <a onClick={openModalRegister}>Here</a>
                        </small>
                      </div>
                    </Form>
                  </Modal.Body>
                </Modal>
                <Modal show={registerModal}>
                  <Modal.Body className="modal-content">
                    <img src={Image2}></img>
                    <h2 className="text-center my-5">Register</h2>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={closeModalRegister}
                      required
                    ></button>
                    <Form>
                      <Form.Group className="mb-4" controlId="formBasicName">
                        <Form.Label className="fw-bold">FullName</Form.Label>
                        <Form.Control
                          name="fullname"
                          onChange={registerOnChangeHandler}
                          type="text"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className="fw-bold">
                          Email address
                        </Form.Label>
                        <Form.Control
                          onChange={registerOnChangeHandler}
                          type="email"
                          name="email"
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                      >
                        <Form.Label className="fw-bold">Password</Form.Label>
                        <Form.Control
                          onChange={registerOnChangeHandler}
                          type="password"
                          name="password"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="formBasicPhone">
                        <Form.Label className="fw-bold">Phone</Form.Label>
                        <Form.Control
                          onChange={registerOnChangeHandler}
                          name="phone"
                          type="text"
                          required
                        />
                      </Form.Group>
                      <div class="d-flex flex-column gap-2 ">
                        <Button
                          className="text-white fw-bold"
                          variant="warning"
                          type="submit"
                          onClick={registerSubmitHandler}
                          required
                        >
                          Submit
                        </Button>
                        <small className="text-center">
                          Have an account ? click{" "}
                          <a onClick={openModalLogin}>Here</a>
                        </small>
                      </div>
                    </Form>
                  </Modal.Body>
                </Modal>
              </li>
              <li>
                <a
                  className="btn-two"
                  onClick={openModalRegister}
                  href="#services"
                >
                  Register
                </a>
              </li>
            </ul>
          )}
        </div>
        <div className="menu-toggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
