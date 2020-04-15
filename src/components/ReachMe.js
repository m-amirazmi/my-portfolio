import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const ReachMe = (props) => {
  return (
    <div className="reach-me">
      <h2>How To Reach Me?</h2>
      <hr />
      <Container>
        <Row>
          <Col md={{ offset: 3, span: 6 }} xs={12}>
            <h5>You can reach me with tap on these social icons below.</h5>
            <Col md={{ offset: 1, span: 10 }}>
              <p>
                <a href="https://wasap.my/601119821105">
                  <i class="fab fa-whatsapp-square fa-2x"></i>
                </a>

                <a href="https://www.linkedin.com/in/m-amirazmi/">
                  <i class="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/m-amirazmi/">
                  <i class="fab fa-github-square fa-2x"></i>
                </a>
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReachMe;
