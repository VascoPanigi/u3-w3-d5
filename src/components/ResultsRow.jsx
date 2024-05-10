import { Col, Row } from "react-bootstrap";
import SongCard from "./SongCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ResultsRow = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.homepageResults.content);

  //   useEffect(() => dispatch(getJobsAction("marilyn-manson")));

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
