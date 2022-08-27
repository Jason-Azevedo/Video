import React from "react";
import { Spinner } from "../components/Spinner";

import withPage from "../wrappers/withPage";
import IVideo from "../interfaces/video";
import Video from "../components/Video";

const tempVideoInfo: IVideo = {
  id: 69,
  thumbnailUrl:
    "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?w=500",
  channelProfileImageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHt6hJA5rVVrCnr82bLSD2vr_w6Ay6i2w3OTtTLHa&s",
  title:
    "How to cook the best pancakes in the world!How to cook the best pancakes in the world!How to cook the best pancakes in the world!",
  channelName: "ThePancakeMan",
  views: 235,
  datePosted: 1598099658,
  description: "Video description",
};

export interface HomeProps {}

export function Home() {
  const videoData: Array<IVideo> = Array(5).fill(tempVideoInfo);

  const videos = videoData.map((e) => <Video type="card" video={e} />);

  return (
    <div className="home">
      <div className="home-content container">{videos}</div>

      <Spinner />
    </div>
  );
}

export default withPage(Home);
