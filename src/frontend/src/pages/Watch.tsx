import React from "react";

import VideoPlayer from "../components/video/VideoPlayer";
import withPage from "../wrappers/withPage";

export function Watch() {
  return (
    <div>
      {/* Video Player */}
      {/* <VideoPlayer url={""} /> */}

      {/* Video info */}
      <div></div>

      {/* Comments */}
      <div></div>
    </div>
  );
}

export default withPage(Watch);
