import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export const PostLink = ({ post }) => {
  const { url } = useRouteMatch();
  const postId = post.id;

  return (
    <li className="list-group-item text-truncate">
      <Link to={`${url}/${postId}`}>{post.title}</Link>
    </li>
  );
};

export default PostLink;
