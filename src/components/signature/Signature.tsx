// BTS
import { Container, Row, Col } from "react-bootstrap";
// Components
import ExternalCredits from "./ExternalCredits";
import DevCredits from './DevCredits';

const Signature = () => (
  <section id="signatureSection">
    <Container fluid>
      <Row>
        <Col className="d-inline-block w-lg-50 text-center">
          <DevCredits />
        </Col>
        <Col className="d-inline-block w-lg-50">
          <ExternalCredits />
        </Col>
      </Row>
    </Container>    
  </section>
);

export default Signature;
