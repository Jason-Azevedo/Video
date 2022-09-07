import React from "react";

import VideoPlayer from "../components/video/VideoPlayer";
import withPage from "../wrappers/withPage";

export function Watch() {
  return (
    <div>
      {/* Video Player */}
      <VideoPlayer
        url={
          "blob:https://www.youtube.com/a45ccc33-038c-423f-b15e-644e38599f03"
        }
      />

      {/* Comments */}

      {/* Side videos */}
    </div>
  );
}

export default withPage(Watch);
