import { Card, Col, ProgressBar, Row } from "react-bootstrap";

import next from "../assets/playerbuttons/next.png";
import play from "../assets/playerbuttons/play.png";
import prev from "../assets/playerbuttons/prev.png";
import repeat from "../assets/playerbuttons/repeat.png";
import shuffle from "../assets/playerbuttons/shuffle.png";
import { useSelector } from "react-redux";

const Player = () => {
  const song = useSelector((state) => state.selected);
  console.log(song);
  console.log(song.selected);

  return (
    <Row className="h-100">
      <Col lg={10} className="offset-lg-2">
        <Row className="h-100 ">
          <Col xs={4}>
            {song.selected && (
              <Card className="player-card-container" style={{ maxWidth: "18rem", maxHeight: "5rem" }}>
                <div className="d-flex align-items-center">
                  <Card.Img src={song.selected.song.album.cover_small} className="cover-image-player" />
                  <div className="d-flex flex-column">
                    <Card.Body>
                      <Card.Title className="title-song-player text-white">{song.selected.song.title}</Card.Title>
                      <Card.Text className="artist-name-player text-white">{song.selected.song.artist.name}</Card.Text>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            )}
          </Col>
          <Col xs={4}>
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
          <Col xs={4}></Col>

          {/* <Col xs={6} md={4} className="playerControls">
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
          </Col> */}
        </Row>
      </Col>
    </Row>
  );
};

export default Player;
