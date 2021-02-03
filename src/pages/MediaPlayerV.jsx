import React from "react";
import ReactPlayer from "react-player";
import "../styles/MediaPlayerV.css";
import close from "../images/close.png";
import { useHistory } from "react-router-dom";

function MediaPlayerV() {
  let history = useHistory();

  const handleChange = () => {
    history.push("/");
  };
  return (
    <div>
      <img
        className="close-video"
        onClick={handleChange}
        src={close}
        alt="close"
      />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=KK8FHdFluOQ&t=4s"
        className="box-video"
        width="100%"
        height="750px"
        controls
        playing
        onEnded={() => alert("termino el video")}
      />
    </div>
  );
}

export default MediaPlayerV;
