import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const PostsNav = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/" className="btn btn-link">
          Go Home
        </Link>
      </li>
    </ol>
  </nav>
);

export default PostsNav;
