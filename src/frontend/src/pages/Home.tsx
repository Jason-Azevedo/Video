import React from "react";

import VideoCard from "../components/VideoCard";

const tempVideoInfo = {
  id: "fadjfladjfalkdj",
  thumbnailUrl:
    "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?w=500",
  channelImageUrl:
    "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=100",
  title: "How to cook the best pancakes in the world!",
  channelName: "ThePancakeMan",
  views: 235,
  datePublished: Date.now(),
};

export interface HomeProps {}

export function Home() {
  const videoData = Array(15).fill(tempVideoInfo);

  const videos = videoData.map((e) => <VideoCard videoInfo={e} />);

  return <div className="video-card-container container">{videos}</div>;
}

export default Home;
