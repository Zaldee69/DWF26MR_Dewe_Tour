import React from "react";
import "./Navbar.css";
import { useState } from "react";
// import Login from "../../items/modal/login/Login";
import { Button, Modal, Form } from "react-bootstrap";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modal, setModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const openModalLogin = () => {
    setModal(true);
    setRegisterModal(false);
  };
  const closeModalLogin = () => {
    setModal(false);
  };
  const openModalRegister = () => {
    setRegisterModal(true);
    setModal(false);
  };
  const closeModalRegister = () => {
    setRegisterModal(false);
  };

  return (
    <div>
      <div className="nav">
        <div className="nav-logo">
          <img src="assets/Icon.png" alt="dewe tour" />
        </div>
        <div className={`nav-title `}>
          {/* {isLoggedIn ? ( */}
          {/* <img src="assets/elips.png"></img>) : ( */}
          <ul>
            <li>
              <a onClick={openModalLogin} className="btn-one" href="#">
                Login
              </a>
              <Modal show={modal}>
                <Modal.Body className="modal-content">
                  <img src="assets/palm1.png"></img>
                  <h2 className="text-center my-5">Login</h2>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeModalLogin}
                  ></button>
                  <Form>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Label className="fw-bold">Email address</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                      <Form.Label className="fw-bold">Password</Form.Label>
                      <Form.Control type="password" />
                    </Form.Group>
                    <div class="d-flex flex-column gap-2 ">
                      <Button
                        className="text-white fw-bold"
                        variant="warning"
                        type="submit"
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
                  <img src="assets/palm1.png"></img>
                  <h2 className="text-center my-5">Register</h2>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeModalRegister}
                  ></button>
                  <Form>
                    <Form.Group className="mb-4" controlId="formBasicName">
                      <Form.Label className="fw-bold">FullName</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Label className="fw-bold">Email address</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                      <Form.Label className="fw-bold">Password</Form.Label>
                      <Form.Control type="password" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPhone">
                      <Form.Label className="fw-bold">Phone</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <div class="d-flex flex-column gap-2 ">
                      <Button
                        className="text-white fw-bold"
                        variant="warning"
                        type="submit"
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
          {/* )} */}
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
