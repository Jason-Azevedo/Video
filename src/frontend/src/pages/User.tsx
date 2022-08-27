import React from "react";

import IVideo from "../interfaces/video";
import { Spinner } from "../components/Spinner";
import withPage from "../wrappers/withPage";

export function User() {
  const data = {
    id: 1,
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWch1vOf3PTrMZjv9AZkWojbZIzkLgogDcDg&usqp=CAU",
    title: "Making the best malva pudding in the world",
    channelName: "Delicious",
    description: "In this video we make the best malva pudding in the world!",
    views: 889,
    datePosted: 1660548785,
    channelProfileImageUrl:
      "https://www.freddyhirsch.co.za/media/1/malva-pudding.jpg",
  };
  const videos: Array<IVideo> = new Array(10).fill(data);

  return (
    <div className="user container">
      <h1 className="title--24">User's Videos:</h1>

      <div className="user-videos">
        {/* {videos.map((e) => ( */}
        {/* ))} */}
      </div>

      <Spinner />
    </div>
  );
}

export default withPage(User);
