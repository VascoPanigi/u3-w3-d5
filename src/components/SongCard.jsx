import { Col } from "react-bootstrap";
import { SELECTED } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

const SongCard = (song) => {
  const dispatch = useDispatch();
  // console.log(song);
  return (
    <Col className=" text-center">
      <img
        className="img-fluid"
        src={song.song.album.cover_medium}
        alt="track"
        onClick={() => {
          dispatch({ type: SELECTED, payload: song });
        }}
      />
      <p>
        Track: {song.song.title}
        <br />
        Artist: {song.song.artist.name}
      </p>
    </Col>
  );
};

export default SongCard;
