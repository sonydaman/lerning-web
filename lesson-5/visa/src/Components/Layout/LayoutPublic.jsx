import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../SideBar/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
function LayoutPublic() {
  return (
      <div>
        <Header />
        <Container fluid>
            <Row >
                <Col xs={12} md={3}>
                    <Sidebar />
                </Col>
                <Col xs={6} md={9}>
                xs=6 md=4
                </Col>
            </Row>
        </Container>
        <Footer />
      </div>
  );
}

export default LayoutPublic;