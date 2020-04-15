import React from "react";
import NavbarLanding from "./NavbarLanding";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../img/profile.jpg";

const MyStoryPage = (props) => {
  return (
    <div className="mystorypage">
      <NavbarLanding />
      <Container>
        <h2>My Story</h2>
        <Row>
          <Col xs={12} sm={4}>
            <div className="prof-img-box">
              <img alt="profile-pic" src={logo} />
            </div>
          </Col>
          <Col xs={12} sm={8}>
            <div className="mystory-a">
              <h4>Hi, I'm Muhamad Amir a self taught web developer...</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae alias, nisi nulla deleniti ipsam dicta rerum quas
                doloribus iure repudiandae. Aut dicta, ducimus voluptas
                doloremque aliquid nobis debitis earum, eaque optio fuga
                similique quasi vel ipsum. Natus incidunt omnis iure. Unde modi,
                dolore soluta molestiae nemo doloribus hic eveniet recusandae.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyStoryPage;
