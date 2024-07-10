import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { getPosts } from "../hook/action";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getPosts();
        setData(response);
        console.log(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-4  md:w-[70%] mx-auto ">
      <h1 className="text-2xl">Welcome to blog app </h1>
      <div className="divider my-2 bg-gray-200 h-[.1px] w-full"></div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {data.map((item) => (
            <li className="my-3 hover:bg-gray-200 px-2 py-2 cursor-pointer ">
              <Link to={`/post/${item.id}`}>
                <div key={item.id}>
                  <h1 className="font-bold text-2xl mb-1 text-green-600">
                    {item.title}
                  </h1>
                  <p className=" text-gray-800">{item.body}</p>
                  {/* <p className="text-xs text-gray-500 mt-3 ">{item.email}</p> */}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
