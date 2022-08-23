import React from "react";
import { Spinner } from "../components/Spinner";

import withPage from "../wrappers/withPage";
import VideoCard from "../components/VideoCard";
import IVideo from "../interfaces/video";

const tempVideoInfo: IVideo = {
  id: 69,
  thumbnailUrl:
    "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?w=500",
  channelProfileImageUrl:
    "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=100",
  title:
    "How to cook the best pancakes in the world! Even if you have no cooking experience",
  channelName: "ThePancakeMan",
  views: 235,
  datePosted: 1598099658,
  description: "Video description",
};

export interface HomeProps {}

export function Home() {
  const videoData: Array<IVideo> = Array(5).fill(tempVideoInfo);

  const videos = videoData.map((e) => <VideoCard video={e} />);

  return (
    <div className="home">
      <div className="home-content container">{videos}</div>

      <Spinner />
    </div>
  );
}

export default withPage(Home);
