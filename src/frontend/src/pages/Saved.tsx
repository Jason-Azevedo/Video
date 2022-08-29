import React from "react";

import { Spinner } from "../components/Spinner";
import withPage from "../wrappers/withPage";
import IVideo from "../interfaces/video";
import Video from "../components/Video";
import MenuItem from "../components/MenuItem";

import { ReactComponent as TrashIcon } from "../assets/svg/trash.svg";
import { useScreenSize } from "../hooks/useScreenSize";

const tempVideoInfo: IVideo = {
  id: 69,
  thumbnailUrl:
    "https://media.istockphoto.com/photos/baked-mac-and-cheese-picture-id1194753924?k=20&m=1194753924&s=612x612&w=0&h=sGdrke6pXyMKBI4YXoAt3ShD99RufnGcdcvU1503hhI=",
  channelProfileImageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHt6hJA5rVVrCnr82bLSD2vr_w6Ay6i2w3OTtTLHa&s",
  title: "The best mac and cheese in the world!",
  channelName: "Tasted",
  views: 235,
  datePosted: 1598099658,
  description: "Video description",
};

export function Saved() {
  const screenSize = useScreenSize();
  const videoData: Array<IVideo> = Array(5).fill(tempVideoInfo);

  const videos = videoData.map((e) => {
    const menuItems = (
      <>
        <MenuItem
          text="Remove"
          icon={<TrashIcon className="icon--16" />}
          onClick={() => {
            // Make a call to the backend to remove this item.
            // Then fetch the updated items
          }}
        />
      </>
    );

    return (
      <Video
        type={screenSize.width <= 468 ? "card" : "compressed"}
        video={e}
        menuItems={menuItems}
      />
    );
  });

  return (
    <div className="saved container--1200">
      <h1 className="title--24">Saved</h1>

      <div className="saved-list">{videos}</div>
      <Spinner />
    </div>
  );
}

export default withPage(Saved);
