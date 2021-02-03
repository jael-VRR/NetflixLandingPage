import React from "react";
import { Row, Col, Nav, Figure, Form, FormControl } from "react-bootstrap";
import netflix from "../images/logo (1).png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div>
      <Row className="wrapper-navbar">
        <Col >
          <Figure>
            <Figure.Image src={netflix} />
          </Figure>
        </Col>
        <Col>
          <Nav>
            <Nav.Link className="item-nav" href="#deets">
              Home
            </Nav.Link>
            <Nav.Link className="item-nav" href="#deets">
              TV shows
            </Nav.Link>
            <Nav.Link className="item-nav" href="#deets">
              Movies
            </Nav.Link>
            <Nav.Link className="item-nav" href="#deets">
              Latest
            </Nav.Link>
            <Nav.Link className="item-nav" href="#deets">
              My List
            </Nav.Link>
          </Nav>
        </Col>
        <Col className="search">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <span><i class="fas fa-search"></i></span>
          </Form>
        </Col>

				
      </Row>
    </div>
  );
}

export default Navbar;
