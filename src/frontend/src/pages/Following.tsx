import React from "react";

import withPage from "../wrappers/withPage";
import FollowingUser from "../components/FollowingUser";

export function Following() {
  const userInfo = {
    id: 34,
    name: "Best Foods",
    channelProfileImageUrl:
      "https://media.gettyimages.com/photos/delicious-homemade-hamburger-and-french-fries-picture-id1254672762?s=612x612",
  };

  const followingUsersInfo = new Array(10).fill(userInfo);

  const followingUsers = followingUsersInfo.map((e) => (
    <FollowingUser user={e} />
  ));

  return (
    <div className="following container--1200">
      <h1 className="title--24">Following</h1>

      <div className="following-list">{followingUsers}</div>
    </div>
  );
}

export default withPage(Following);
