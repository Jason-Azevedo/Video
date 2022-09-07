import React, { ReactElement, useState, useRef } from "react";
import { Link } from "react-router-dom";

import IVideo from "../interfaces/video";
import getPostedAgo from "../utils/getPostedAgo";

import { ReactComponent as EllipsisIcon } from "../assets/svg/ellipsis-vertical.svg";
import truncateText from "../utils/truncateText";
import FloatingMenu from "./FloatingMenu";

interface IVideoProps {
  type: "card" | "compressed";
  video: IVideo;
  menuItems?: ReactElement;
  screenSize?: { width: number; height: number };
}

function determineContent(
  screenSize: { width: number; height: number },
  type: "card" | "compressed"
) {
  let titleLength = 200;
  let channelLength = 100;
  let showDesc = false;

  if (screenSize.width < 600) {
    titleLength = 50;
    channelLength = 30;
  } else if (screenSize.width < 750) {
    titleLength = 80;
    channelLength = 40;
  }

  if (type === "compressed" && screenSize.width > 767) {
    showDesc = true;
  }

  if (type === "card") {
    titleLength = 70;
    channelLength = 40;
  }

  return [titleLength, channelLength, showDesc];
}

export default function Video({
  type,
  video,
  menuItems,
  screenSize,
}: IVideoProps) {
  const [titleLength, channelLength, showDesc] = determineContent(
    screenSize || { width: window.innerWidth, height: window.innerHeight },
    type
  );

  const ellipsisRef = useRef<HTMLDivElement>(null);
  const [showingMenu, showMenu] = useState(false);

  const toggleMenu = (event: MouseEvent) => {
    // Toggle menu if we didn't click on ellipsis
    if (!ellipsisRef.current?.contains(event.target as Node)) {
      showMenu((prev) => !prev);
    }
  };

  const floatingMenuPos =
    type === "card"
      ? { bottom: "0%", right: "0%" }
      : { top: "0%", right: "0%" };

  return (
    <div className={`video-${type}`}>
      <div className={`video-overlay ${showingMenu ? "" : "hide"}`}></div>
      <Link className="video-link" to={`/watch?v=${video.id}`} />
      <div className="video-thumbnail-container">
        <img className="video-thumbnail image" src={video.thumbnailUrl} />
        <span className="video-duration">8:36</span>
      </div>

      <div className="video-content">
        {type === "card" && (
          <div className="video-content-channel-image">
            <img className="image round" src={video.channelProfileImageUrl} />
          </div>
        )}

        <div className="video-content-details">
          <h3 className="title--16">
            {truncateText(video.title, titleLength as number)}
          </h3>
          <h4 className="title--14 dim">
            {truncateText(video.channelName, channelLength as number)}
          </h4>
          <span className="text--14 dim">
            {video.views}k views • {getPostedAgo(video.datePosted)}
          </span>

          {showDesc && (
            <p className="text--14">{truncateText(video.description, 120)}</p>
          )}
        </div>

        {menuItems && (
          <div className="video-ellipsis" ref={ellipsisRef}>
            <div
              className="video-ellipsis-icon"
              onClick={() => showMenu((prev) => !prev)}
            >
              <EllipsisIcon className="icon--18" />
            </div>

            <FloatingMenu
              show={showingMenu}
              position={floatingMenuPos}
              offMenuClickHandler={toggleMenu}
            >
              {/* Hide the menu when a user clicks an item in the menu */}
              <div onClick={() => showMenu((prev) => !prev)}>{menuItems}</div>
            </FloatingMenu>
          </div>
        )}
      </div>
    </div>
  );
}
