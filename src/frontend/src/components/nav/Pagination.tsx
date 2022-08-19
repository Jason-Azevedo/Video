import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as LeftArrowIcon } from "../../assets/svg/left-arrow.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/svg/right-arrow.svg";

interface IPaginationProps {}

export default function Pagination() {
  return (
    <div className="pagination">
      <Link to={""} className="link">
        <LeftArrowIcon className="icon--18" />
      </Link>

      <Link to={""} className="link--18">
        1
      </Link>
      <Link to={""} className="link--18">
        2
      </Link>
      <Link to={""} className="button">
        3
      </Link>
      <Link to={""} className="link--18">
        4
      </Link>
      <Link to={""} className="link--18">
        5
      </Link>

      <Link to={""} className="link">
        <RightArrowIcon className="icon--18" />
      </Link>
    </div>
  );
}
