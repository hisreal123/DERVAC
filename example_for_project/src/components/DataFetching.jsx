import React, { useEffect } from "react";
import { getAllData } from "../utils/action";

const DataFetching = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllData();

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {" "}
      <h1> Data fetching !!</h1>
    </div>
  );
};

export default DataFetching;
