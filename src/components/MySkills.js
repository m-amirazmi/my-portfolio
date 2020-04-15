import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

const MySkills = (props) => {
  return (
    <div className="myskills" id="skills">
      <h2>My Skills</h2>
      <hr />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h4>Front End Technologies</h4>
            <hr />
            <Row>
              <Col xs={4} md={4} className="card-skills-box">
                <Card>
                  <Card.Img
                    className="card-skills"
                    variant="top"
                    src="https://pluspng.com/img-png/bootstrap-png-bootstrap-512.png"
                  />
                  <Card.Body className="card-skills-title">
                    <Card.Title>Bootstrap</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4} md={4} className="card-skills-box">
                <Card>
                  <Card.Img
                    className="card-skills"
                    variant="top"
                    src="https://i2.wp.com/www.nuimedia.com/wp-content/uploads/2017/01/javascript-logo.png?ssl=1"
                  />
                  <Card.Body className="card-skills-title">
                    <Card.Title>Javascript</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} xs={4} className="card-skills-box">
                <Card>
                  <Card.Img
                    className="card-skills"
                    variant="top"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
                  />
                  <Card.Body className="card-skills-title">
                    <Card.Title>ReactJS</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <h4>Back End Technologies</h4>
            <hr />
            <Row>
              <Col xs={4} md={4} className="card-skills-box">
                <Card>
                  <Card.Img
                    className="card-skills"
                    variant="top"
                    src="https://www.kindpng.com/picc/m/385-3850482_mongodb-logo-png-transparent-png.png"
                  />
                  <Card.Body className="card-skills-title">
                    <Card.Title>MongoDB</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4} md={4} className="card-skills-box">
                <Card>
                  <Card.Img
                    className="card-skills"
                    variant="top"
                    src="https://expressjs.com/images/express-facebook-share.png"
                  />
                  <Card.Body className="card-skills-title">
                    <Card.Title>Express</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} xs={4} className="card-skills-box">
                <Card>
                  <Card.Img
                    className="card-skills"
                    variant="top"
                    src="https://miro.medium.com/max/1200/1*m5RYM_Wkj4LsZewpigV5tg.jpeg"
                  />
                  <Card.Body className="card-skills-title">
                    <Card.Title>NodeJS</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MySkills;
