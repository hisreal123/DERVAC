import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { getPostById } from "../hook/action";

const PostDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [post, setPost] = useState({});


  useEffect(() => {
    const fetchPostById = async () => {
      setIsLoading(true);
      try {
        const response = await getPostById({id});
        setPost(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };

    fetchPostById();
  }, []);

  if (isLoading) return <Loader />;

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
