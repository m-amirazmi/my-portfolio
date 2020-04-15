import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import pro1 from "../img/project1.jpg";
import pro2 from "../img/project2.jpg";
import pro3 from "../img/project3.jpg";
import pro4 from "../img/project4.jpg";

const MyProjectPage = (props) => {
  return (
    <div className="myprojectpage" id="projects">
      <Container>
        <h2 className="myproject-title">My Projects</h2>
        <hr />
        <div className="">
          <Row>
            <Col xs={12} sm={6}>
              <Card className="card-box">
                <Card.Img variant="top" src={pro1} />
                <Card.Body>
                  <Card.Title>My Portfolio Website</Card.Title>
                  <Card.Text>
                    <p>
                      This portfolio website is build using React and Bootstrap.
                      Currently no backend attached to this portfolio website.
                      Plan to connect with MongoDB and the NodeJS to include the
                      blog feature to this portfolio site.
                    </p>
                  </Card.Text>
                  <Button
                    block
                    href="https://compassionate-kalam-076392.netlify.com/#projects"
                    variant="dark"
                  >
                    View Page
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className="card-box">
                <Card.Img variant="top" src={pro4} />
                <Card.Body>
                  <Card.Title>Bazaar On</Card.Title>
                  <Card.Text>
                    <p>
                      The Bazaar On is a fun or hobby project which to allow
                      people order meals through online. The main objective is
                      to reduce the risks of infections during Ramadhan. This
                      site is not complete and on hold. Build from the backend
                      using NodeJS, Express, and MongoDB.
                    </p>
                  </Card.Text>
                  <Button
                    block
                    href="https://bazaar-online-muhamad-amir.herokuapp.com/"
                    variant="dark"
                  >
                    View Page
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={{ offset: 3, span: 6 }}>
              <Card className="card-box">
                <Card.Img variant="top" src={pro3} />
                <Card.Body>
                  <Card.Title>Sedapnya.my</Card.Title>
                  <Card.Text>
                    <p>
                      Another fun or hobby project which is a recipe apps which
                      built solely for mobile view site. This site is in
                      progress and will continue to grow as I continue to learn
                      a new thing. Built on React and using Material-UI. Later
                      will include the backend technology to give dynamic and
                      persistence data to the app.
                    </p>
                  </Card.Text>
                  <Button
                    block
                    href="https://cranky-banach-49b2e5.netlify.com/"
                    variant="dark"
                  >
                    View Page
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default MyProjectPage;
