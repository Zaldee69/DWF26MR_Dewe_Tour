import React from "react";
import { Container } from "react-bootstrap";

import Header from "../component/Header/Header";
import Main from "../component/Main/Main";

function Home() {
  return (
    <div>
      <Container fluid className="px-0 mt-5 ">
        <Header />
      </Container>
      <Main />
    </div>
  );
}

export default Home;
