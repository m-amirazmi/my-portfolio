import React from "react";
import NavbarLanding from "./NavbarLanding";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../img/prof2.jpg";
import MyProjectPage from "./MyProjectPage";

const MyStoryPage = (props) => {
  return (
    <div className="mystorypage">
      <NavbarLanding />
      <Container>
        <h2>My Story</h2>
        <hr />
        <Row>
          <Col xs={12} sm={4}>
            <div className="prof-img-box">
              <img alt="profile-pic" src={logo} />
            </div>
          </Col>
          <Col xs={12} sm={8}>
            <div className="mystory-text">
              <h3>Hi, I'm Muhamad Amir a self taught web developer...</h3>
              <p>
                My web development journey begins on November 2019. I love
                programming during my study in Electronics Engineering plays
                around C and Assembly language, but I not really into
                programming hardware. So, after graduation, I've start my own
                self-study about web development with Javascript. Since then, I
                have learned a lot of web development technology such as{" "}
                <strong>NodeJS, MongoDB, Javascript, and React</strong>. This
                Movement Control Order (MCO) really gives me a big chance to
                <strong> learn and build</strong> as much as I can in order to
                improve my skills. Currently learning the React framework as
                well as integration between front end and back end. My goals is
                to become a successful <strong>Full Stack Developer</strong>{" "}
                which can provide a complete website solution to the client. To
                begin with, now I'm seeking for a{" "}
                <strong>Junior Web Developer </strong> or any{" "}
                <strong>Internship in Web Development</strong> that can give me
                a chance to show and improve my skills in the real world also
                give chance for me to contribute my skills into a community.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <MyProjectPage />
    </div>
  );
};

export default MyStoryPage;
