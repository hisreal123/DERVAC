import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="px-4  md:w-[70%] mx-auto ">
      <h1>Welcome to all posts</h1>
      {isLoading ? (
        <p> Loading ....</p>
      ) : (
        <div>
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
        </div>
      )}
    </div>
  );
};

export default Home;
