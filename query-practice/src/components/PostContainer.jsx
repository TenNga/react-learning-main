import React from "react";
import useFetchPosts from "../hooks/useFetchPosts";

const PostContainer = () => {
    const { posts, isLoading, error } = useFetchPosts();

  const renderPost = posts.map((post) => {
    return (
      <article>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </article>
    );
  });
  return (
    <div>
    {isLoading && <h1>Loading...</h1>}
    {error && <h1>Error: {error.message}</h1>}
      <h1>Post Container:</h1>
      {renderPost}
    </div>
  );
};

export default PostContainer;
