import { Col } from "react-bootstrap";

const SongCard = (song) => {
  console.log(song);
  return (
    <Col className=" text-center">
      <img className="img-fluid" src={song.song.album.cover_medium} alt="track" />
      <p>
        Track: {song.song.title}
        <br />
        Artist: {song.song.artist.name}
      </p>
    </Col>
  );
};

export default SongCard;
