import React from "react";
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <>
      <article>
        <h3>{props.post.title}</h3>
        <small>{props.post.subtitle}</small>
        <br />
        Likes: {props.likes / 2}
      </article>
      <br />
    </>
  );
}

export default Post;

Post.protoTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};