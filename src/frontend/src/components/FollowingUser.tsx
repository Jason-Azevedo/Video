import React from "react";
import { Link } from "react-router-dom";

interface IFollowingUserProps {
  user: {
    id: number;
    name: string;
    channelProfileImageUrl: string;
  };
}

export default function FollowingUser({ user }: IFollowingUserProps) {
  return (
    <div className="following-user">
      <Link to={`/user/${user.id}`} className="following-user-info">
        <img className="image round" src={user.channelProfileImageUrl} alt="" />
        <h3 className="title--18">{user.name}</h3>
      </Link>

      <button className="button">unfollow</button>
    </div>
  );
}
