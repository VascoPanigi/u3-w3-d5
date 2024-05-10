import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./assets/logo/logo.png";
import next from "./assets/playerbuttons/next.png";
import play from "./assets/playerbuttons/play.png";
import prev from "./assets/playerbuttons/prev.png";
import repeat from "./assets/playerbuttons/repeat.png";
import shuffle from "./assets/playerbuttons/shuffle.png";
import { Button, Col, Container, FormControl, InputGroup, Nav, Navbar, ProgressBar, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          {/* <!--SIDEBAR--> */}
          <Col xs={2}>
            <Navbar expand="md" fixed="left" className="justify-content-between">
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
          {/* <!--END SIDEBAR-->
        <!--MAIN SECTION--> */}
          <Col xs={12} md={9} className="offset-md-3 mainPage">
            <Row>
              <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
                <a href="#">TRENDING</a>
                <a href="#">PODCAST</a>
                <a href="#">MOODS AND GENRES</a>
                <a href="#">NEW RELEASES</a>
                <a href="#">DISCOVER</a>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <div id="rock">
                  <h2>Rock Classics</h2>
                  <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="rockSection"
                  >
                    <Col className=" text-center">
                      <img
                        className="img-fluid"
                        src={
                          "https://e-cdns-images.dzcdn.net/images/cover/6706f1154083f461a348508c28030a30/250x250-000000-80-0-0.jpg"
                        }
                        alt="track"
                      />
                      <p>
                        Track: dioc
                        <br />
                        Artist: dioc
                      </p>
                    </Col>
                    <div className="col text-center">
                      <img
                        className="img-fluid"
                        src={
                          "https://e-cdns-images.dzcdn.net/images/cover/6706f1154083f461a348508c28030a30/250x250-000000-80-0-0.jpg"
                        }
                        alt="track"
                      />
                      <p>
                        Track: dioc
                        <br />
                        Artist: dioc
                      </p>
                    </div>
                    <div className="col text-center">
                      <img
                        className="img-fluid"
                        src={
                          "https://e-cdns-images.dzcdn.net/images/cover/6706f1154083f461a348508c28030a30/250x250-000000-80-0-0.jpg"
                        }
                        alt="track"
                      />
                      <p>
                        Track: dioc
                        <br />
                        Artist: dioc
                      </p>
                    </div>
                    <div className="col text-center">
                      <img
                        className="img-fluid"
                        src={
                          "https://e-cdns-images.dzcdn.net/images/cover/6706f1154083f461a348508c28030a30/250x250-000000-80-0-0.jpg"
                        }
                        alt="track"
                      />
                      <p>
                        Track: dioc
                        <br />
                        Artist: dioc
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <div id="pop">
                  <h2>Pop Culture</h2>
                  <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="popSection"
                  ></div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <div id="hiphop">
                  <h2>#HipHop</h2>
                  <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="hipHopSection"
                  ></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* <!--END MAIN SECTION-->
    <!--PLAYER--> */}
      <Container fluid className="fixed-bottom bg-container pt-1">
        <Row className="h-100">
          <Col lg={10} className="offset-lg-2">
            <Row className="h-100 flex-column justify-content-center align-items-center">
              <Col xs={6} md={4} className="playerControls">
                <div className="d-flex">
                  <a href="#">
                    <img src={shuffle} alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src={prev} alt="prev" />
                  </a>
                  <a href="#">
                    <img src={play} alt="play" />
                  </a>
                  <a href="#">
                    <img src={next} alt="next" />
                  </a>
                  <a href="#">
                    <img src={repeat} alt="repeat" />
                  </a>
                </div>
                <ProgressBar className="mt-3" now={50} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
