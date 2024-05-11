import { Card, Col, ProgressBar, Row } from "react-bootstrap";

import next from "../assets/playerbuttons/next.png";
import play from "../assets/playerbuttons/play.png";
import prev from "../assets/playerbuttons/prev.png";
import repeat from "../assets/playerbuttons/repeat.png";
import shuffle from "../assets/playerbuttons/shuffle.png";
import { useSelector } from "react-redux";

const Player = () => {
  const song = useSelector(() => (state) => state.homepageResults);

  return (
    <Row className="h-100">
      <Col lg={10} className="offset-lg-2">
        <Row className="h-100 flex-column justify-content-center align-items-center">
          {/* <Col xs={3} md={4}>
            <Card>
              <Card.Img src={} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4} md={4}>
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
          </Col>
          <Col xs={5} md={4}></Col> */}

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
  );
};

export default Player;
