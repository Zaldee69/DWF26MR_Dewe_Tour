import { Container, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import "./AddTrip.css";

const AddTrip = () => {
  const [addTrip, setaddTrip] = useState({
    id: "",
    titleTrip: "",
    country: "",
    accomodation: "",
    transportation: "",
    price: "",
    eat: "",
    day: "",
    night: "",
    description: "",
    image: "",
  });

  //Handle input from admin
  const addTripOnChange = (e) => {
    //set new value to setAddtrip
    setaddTrip((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      id: Date.now(),
    }));
  };

  //handle submit from admin
  const addTripOnSubmit = (e) => {
    e.preventDefault();
    const dataTrip = JSON.parse(localStorage.getItem("data_trip"));
    //push to localstorage
    dataTrip.push(addTrip);
    //set new value
    localStorage.setItem("data_trip", JSON.stringify(dataTrip));
  };

  return (
    <div>
      <Container fluid className="add-trip">
        <Navbar />
        <Container className="add-trip-container">
          <Form className="">
            <Form.Group className="mb-3" controlId="titleTrip">
              <Form.Label className="fw-bold">Title Trip</Form.Label>
              <Form.Control
                onChange={addTripOnChange}
                type="text"
                name="titleTrip"
              />
            </Form.Group>
            <Form.Label className="fw-bold">Country</Form.Label>
            <Form.Select
              onChange={addTripOnChange}
              name="country"
              aria-label="Default select example"
              className="shadow-none"
            >
              <option value="Japan">Japan</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Australia">Australia</option>
              <option value="South Korea">South Korea</option>
              <option value="Japan">Japan</option>
            </Form.Select>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group className="mb-3" controlId="accomodation">
              <Form.Label className="fw-bold">Accomodation</Form.Label>
              <Form.Control
                onChange={addTripOnChange}
                type="text"
                name="accomodation"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group className="mb-3" controlId="transportation">
              <Form.Label className="fw-bold">Transportation</Form.Label>
              <Form.Control
                onChange={addTripOnChange}
                type="text"
                name="transportation"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label className="fw-bold">Price</Form.Label>
              <Form.Control
                onChange={addTripOnChange}
                type="text"
                name="price"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group className="mb-3" controlId="eat">
              <Form.Label className="fw-bold">Eat</Form.Label>
              <Form.Control onChange={addTripOnChange} name="eat" type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form>
              <Row>
                <Form.Label className="fw-bold">Duration</Form.Label>
                <Col xs={2}>
                  <div className="d-flex gap-3 align-items-center">
                    <Form.Control name="day" onChange={addTripOnChange} />
                    <p className="fw-bold">Day</p>
                  </div>
                </Col>
                <Col xs={2}>
                  <div className="d-flex gap-3 align-items-center">
                    <Form.Control name="night" onChange={addTripOnChange} />
                    <p className="fw-bold">Night</p>
                  </div>
                </Col>
              </Row>
            </Form>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label className="fw-bold">Description</Form.Label>
              <Form.Control
                onChange={addTripOnChange}
                as="textarea"
                name="description"
                rows={3}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="fw-bold">Image</Form.Label>
              <Form.Control
                onChange={addTripOnChange}
                type="file"
                name="image"
              />
            </Form.Group>
            <button
              onClick={addTripOnSubmit}
              className="btn-warning btn fw-bold text-light"
              type="submit"
            >
              Add Trip
            </button>
          </Form>
        </Container>
        <Footer />
      </Container>
    </div>
  );
};

export default AddTrip;
