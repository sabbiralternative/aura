import { WebPlayer } from "@antmedia/web_player";
import { useEffect, useRef } from "react";

const AntMedia = () => {
  const bigVideo = useRef(null);
  const embeddedPlayerRef = useRef(null);
  const playOrderLocal = ["webrtc", "hls", "dash"];

  useEffect(() => {
    embeddedPlayerRef.current = new WebPlayer(
      {
        streamId: "football2",
        httpBaseURL: "https://1app.live/live/",
        videoHTMLContent:
          '<video id="video-player" class="video-js vjs-default-skin vjs-big-play-centered"  playsinline style="width:100%;height:100%;object-fit:cover"></video>',
        playOrder: playOrderLocal,
      },
      bigVideo.current
    );

    embeddedPlayerRef.current
      .initialize()
      .then(() => {
        embeddedPlayerRef.current.play();
      })
      .catch((error) => {
        console.error("Error while initializing embedded player: " + error);
      });
  }, [playOrderLocal]);
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
      }}
      ref={bigVideo}
    ></div>
  );
};

export default AntMedia;
