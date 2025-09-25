import React from "react";
import YouTube from "react-youtube";


const VideoPlayer = ({ videoId, onClose }) => {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="videoModal">
      <button className="closeBtn" onClick={onClose}>X</button>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default VideoPlayer;
