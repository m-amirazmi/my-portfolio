import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const LandingText = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="landing-text">
            <h2>MUHAMAD AMIR AZMI</h2>
            <hr />
            <h5>"ASPIRING WEB DEVELOPER"</h5>
            <h6>| SELF TAUGHT | MERN STACK |</h6>
            <p>
              <a href="https://github.com/m-amirazmi/">
                <i class="fab fa-github-square fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/in/m-amirazmi/">
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
            </p>
            <div className="">
              <Button variant="light" href="#projects">
                View My Projects
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingText;
