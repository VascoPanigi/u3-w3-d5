import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import ResultsRow from "./ResultsRow";
import Player from "./Player";

const HomePage = () => {
  return (
    <>
      <Container fluid>
        <Container fluid>
          <Row>
            <Sidebar />

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
              <ResultsRow />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="fixed-bottom bg-container pt-1">
        <Player />
      </Container>
    </>
  );
};

export default HomePage;
