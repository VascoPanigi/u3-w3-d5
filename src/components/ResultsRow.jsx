import { Col, Row } from "react-bootstrap";
import SongCard from "./SongCard";

const ResultsRow = () => {
  return (
    <Row>
      <Col xs={10}>
        <div id="rock">
          <h2>Rock Classics</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ResultsRow;
