import { Container, Form, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import "./AddTrip.css";
import { API } from "../../config/api";
import toast, { Toaster } from "react-hot-toast";

const AddTrip = () => {
  const [addTrip, setaddTrip] = useState({
    titleTrip: "",
    country: "",
    accomodation: "",
    transportation: "",
    price: "",
    eat: "",
    day: "",
    date: "",
    night: "",
    description: "",
    quota: "",
    image: "",
  });

  //history

  const [country, setCountry] = useState([]);

  const getCountry = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const response = await API.get("/country", config);
    setCountry(response.data.data);
  };

  useEffect(() => {
    getCountry();
  }, []);

  //Handle input from admin
  const addTripOnChange = (e) => {
    //set new value to setAddtrip
    setaddTrip((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    }));
  };

  //handle submit from admin
  const addTripOnSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };

    const formData = new FormData();
    for (let i = 0; i < addTrip.image.length; i++) {
      formData.append("image", addTrip.image[i]);
    }
    formData.append("title", addTrip.titleTrip);
    formData.append("countries", addTrip.country);
    formData.append("accomodation", addTrip.accomodation);
    formData.append("transportation", addTrip.transportation);
    formData.append("eat", addTrip.eat);
    formData.append("day", addTrip.day);
    formData.append("night", addTrip.night);
    formData.append("dateTrip", addTrip.date);
    formData.append("quota", addTrip.quota);
    formData.append("price", addTrip.price);
    formData.append("description", addTrip.description);

    toast.promise(
      API.post("/trip", formData, config).then(() => {
        setaddTrip({
          titleTrip: "",
          accomodation: "",
          transportation: "",
          price: "",
          eat: "",
          day: "",
          date: "",
          night: "",
          description: "",
          quota: "",
          image: "",
        });
      }),
      {
        loading: "Loading",
        success: "Add Trip Success",
        error: "Add Trip Failed",
      }
    );
  };

  return (
    <div>
      <Container fluid className="add-trip">
        <Navbar />
        <Container className="add-trip-container">
          <Form enctype="multipart/form-data" className="">
            <Form.Group className="mb-3" controlId="titleTrip">
              <Form.Label className="fw-bold">Title Trip</Form.Label>
              <Form.Control
                onChange={addTripOnChange}
                type="text"
                name="titleTrip"
                value={addTrip.titleTrip}
              />
            </Form.Group>
            <Form.Label className="fw-bold">Country</Form.Label>
            <Form.Select
              onChange={addTripOnChange}
              name="country"
              aria-label="Default select example"
              className="shadow-none"
            >
              {country.map((el, i) => {
                return (
                  <option key={i} value={el.id}>
                    {el.name}
                  </option>
                );
              })}
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
                value={addTrip.accomodation}
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
                value={addTrip.transportation}
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
                value={addTrip.price}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group className="mb-3" controlId="eat">
              <Form.Label className="fw-bold">Eat</Form.Label>
              <Form.Control
                value={addTrip.eat}
                onChange={addTripOnChange}
                name="eat"
                type="text"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label className="fw-bold">Date</Form.Label>
              <Form.Control
                onChange={addTripOnChange}
                name="date"
                type="date"
                value={addTrip.date}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group className="mb-3" controlId="quota">
              <Form.Label className="fw-bold">Quota</Form.Label>
              <Form.Control
                onChange={addTripOnChange}
                name="quota"
                type="text"
                value={addTrip.quota}
              />
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
                    <Form.Control
                      value={addTrip.day}
                      name="day"
                      onChange={addTripOnChange}
                    />
                    <p className="fw-bold">Day</p>
                  </div>
                </Col>
                <Col xs={2}>
                  <div className="d-flex gap-3 align-items-center">
                    <Form.Control
                      value={addTrip.night}
                      name="night"
                      onChange={addTripOnChange}
                    />
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
                value={addTrip.description}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="fw-bold">Image</Form.Label>
              <Form.Control
                multiple
                onChange={addTripOnChange}
                type="file"
                name="image"
                defaultValue={addTrip.image}
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
        <Toaster />
      </Container>
    </div>
  );
};

export default AddTrip;
