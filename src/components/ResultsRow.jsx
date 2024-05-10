import { Col, Row } from "react-bootstrap";
import SongCard from "./SongCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSongsAction } from "../Redux/actions";

const ResultsRow = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.homepageResults);
  console.log(songs);

  useEffect(() => {
    dispatch(getSongsAction("nightwish", "first"));
    dispatch(getSongsAction("the-weeknd", "second"));
    dispatch(getSongsAction("chet-baker", "third"));
    // console.log(songs.first_row);

    console.log(songs.first_row.data);
    console.log(songs.first_row.data.slice(0, 4));
  }, []);

  return (
    <Row>
      <Col xs={10}>
        {songs.first_row.data && (
          <>
            <div id="metal">
              <h2>Metal</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3 text-white"
                id="metalSection"
              >
                {songs.first_row.data.length > 0 &&
                  songs.first_row.data.slice(0, 4).map((song) => <SongCard key={song.index} song={song} />)}
              </div>
            </div>
            <div id="soul">
              <h2>Soul</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3 text-white"
                id="soulSection"
              >
                {songs.second_row.data.length > 0 &&
                  songs.second_row.data.slice(0, 4).map((song) => <SongCard key={song.index} song={song} />)}
              </div>
            </div>
            <div id="jazz">
              <h2>Jazz</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3 text-white"
                id="jazzSection"
              >
                {songs.third_row.data.length > 0 &&
                  songs.third_row.data.slice(0, 4).map((song) => <SongCard key={song.index} song={song} />)}
              </div>
            </div>
          </>
        )}
      </Col>
    </Row>
  );
};

export default ResultsRow;
