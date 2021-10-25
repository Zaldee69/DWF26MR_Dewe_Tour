import Navbar from "../../component/Navbar/Navbar";
import { Container } from "react-bootstrap";
import Footer from "../../component/Footer/Footer";
import TableComp from "../../items/table/Table";
import "./ListTransaction.css";

const ListTransaction = () => {
  return (
    <div>
      <Container fluid className="list_transaction-container mt-5  ">
        <Navbar />
        <Container>
          <TableComp />
        </Container>

        <Footer />
      </Container>
    </div>
  );
};

export default ListTransaction;
