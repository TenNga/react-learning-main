import React, { useState, useEffect } from "react";

const useFetchPosts = () => {
  //hold data
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //fetch data
  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await resp.json();
        setPosts(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, []);

  //return data
  return { posts, isLoading, error };
};

export default useFetchPosts;
