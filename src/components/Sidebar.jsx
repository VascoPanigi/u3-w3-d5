import { Button, Col, Container, FormControl, InputGroup, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo/logo.png";

const Sidebar = () => {
  return (
    <Col xs={2}>
      <Navbar expand="md" fixed="left" className="justify-content-between d-none d-md-flex">
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="flex-column">
              <Nav.Link href="#">
                <i className="bi bi-house-door-fill"></i> Home
              </Nav.Link>
              <Nav.Link href="#">
                <i className="bi bi-book-fill"></i> Your Library
              </Nav.Link>
              <InputGroup className="mt-3">
                <FormControl type="text" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                  <Button variant="outline-secondary" className="h-100">
                    GO
                  </Button>
                </div>
              </InputGroup>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <Button className="signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="login-btn" type="button">
            Login
          </Button>
          <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
        </div>
      </Navbar>
    </Col>
  );
};

export default Sidebar;
