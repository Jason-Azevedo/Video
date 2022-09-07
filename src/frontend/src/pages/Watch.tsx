import React from "react";

import VideoPlayer from "../components/video/VideoPlayer";
import withPage from "../wrappers/withPage";

export function Watch() {
  return (
    <div className="layout--aside right">
      <div>
        {/* Video Player */}
        <VideoPlayer
          url={
            "blob:https://www.youtube.com/a45ccc33-038c-423f-b15e-644e38599f03"
          }
        />

        {/* Comments */}
      </div>

      {/* Side videos */}
      <div></div>
    </div>
  );
}

export default withPage(Watch);
