import { Col } from "react-bootstrap";

const SongCard = () => {
  return (
    <Col className=" text-center">
      <img
        className="img-fluid"
        src={"https://e-cdns-images.dzcdn.net/images/cover/6706f1154083f461a348508c28030a30/250x250-000000-80-0-0.jpg"}
        alt="track"
      />
      <p>
        Track:
        <br />
        Artist:
      </p>
    </Col>
  );
};

export default SongCard;
