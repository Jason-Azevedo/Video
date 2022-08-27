import React from "react";
import { useSearchParams } from "react-router-dom";

import Video from "../components/Video";
import Pagination from "../components/nav/Pagination";
import withPage from "../wrappers/withPage";
import { useScreenSize } from "../hooks/useScreenSize";
import IVideo from "../interfaces/video";
import { maxMobileSize } from "../utils/maxScreenSizes";

export function SearchResults() {
  const screenSize = useScreenSize();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const data = {
    id: 1,
    thumbnailUrl:
      "https://media.gettyimages.com/photos/lasagna-spring-picture-id168246587",
    title:
      "The Best Lasagna Recipe In The World that everyone will love you for until the end of time no matter what the haters say!",
    channelName: "The master cooks",
    description: "In this video we make the best lasagna in the world!",
    views: 323,
    datePosted: 1660548785,
    channelProfileImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxh1fUmCXzNmubU4QH2KkqQd2JbVeKnURQw&usqp=CAU",
  };
  const videos: Array<IVideo> = new Array(5).fill(data);
  const videoType = screenSize.width <= maxMobileSize ? "card" : "compressed";

  return (
    <div className="search-page container--1200">
      <h1 className="title--18">Search results for "{query}"</h1>

      <div className="search-page-results">
        {videos.map((e) => (
          <Video video={e} type={videoType} screenSize={screenSize} />
        ))}
      </div>

      <Pagination />
    </div>
  );
}

export default withPage(SearchResults);
