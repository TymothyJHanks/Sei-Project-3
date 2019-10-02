import React, { Component } from "react";
import video from "./backgroundVideo.mp4"

class VideoBackground extends Component {

  render() {
    
    const style = {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: "fixed",
      margin: "auto",
      zIndex: -3,
      minHeight: "100vh",
      minWidth: "100vw",
    };
    return (
        <video style={style}  autoPlay={true} loop muted={true}>
          <source src={video} type="video/mp4" />
        </video>
    );
  }
}
export default VideoBackground;
