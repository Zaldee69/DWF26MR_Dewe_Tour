import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../component/Navbar/Navbar";
import Header from "../component/Header/Header";
import Main from "../component/Main/Main";
import Footer from "../component/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Container fluid className="main px-0 ">
        <Main />
        <Footer />
      </Container>
    </>
  );
}

export default Home;
