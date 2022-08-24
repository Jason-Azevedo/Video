import React from "react";
import { Link } from "react-router-dom";

import withPage from "../wrappers/withPage";
import Pagination from "../components/nav/Pagination";
import CompactVideo from "../components/CompactVideo";
import IVideo from "../interfaces/video";
import { useScreenSize } from "../hooks/useScreenSize";
import { ReactComponent as TrashIcon } from "../assets/svg/trash.svg";
import { ReactComponent as PencilIcon } from "../assets/svg/pencil.svg";

export function MyVideos() {
  const screenSize = useScreenSize();
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
    channelProfileImageUrl: "",
  };
  const videos: Array<IVideo> = new Array(10).fill(data);

  const MyVideo = (props: { video: IVideo }) => (
    <div className="myvideo">
      <CompactVideo video={props.video} screen={screenSize} />

      <div className="myvideo-icons">
        <Link to={`/edit?id=${props.video.id}`}>
          <PencilIcon className="icon--18" />
        </Link>
        <Link to={`/confirmdelete?id=${props.video.id}`}>
          <TrashIcon className="icon--18" />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="myvideos container--1200">
      <div className="myvideos-header">
        <h1 className="title--24">My Videos</h1>
        <Link className="button" to="/create">
          New
        </Link>
      </div>

      <div className="myvideos-videos">
        {videos.map((e) => (
          <MyVideo video={e} />
        ))}
      </div>

      <Pagination />
    </div>
  );
}

export default withPage(MyVideos);
