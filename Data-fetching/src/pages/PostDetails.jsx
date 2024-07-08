import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };

    fetchPost();
  }, []);

  if (isLoading) return <p>Loading ....</p>;

  return (
    <div className="px-4  md:w-[70%] mx-auto">
      {post ? (
        <div>
          <h1 className="font-bold text-2xl mb-1 text-green-600">
            {post.title}
          </h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Post not found</p>
      )}

      {/* comments down here */}
    </div>
  );
};

export default PostDetails;
