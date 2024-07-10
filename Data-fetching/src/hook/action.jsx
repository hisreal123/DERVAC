import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getPosts = async () => {
   const res = await axios.get(`${API_URL}/posts`)

   if (!res) {
    console.log('Error fetching data')
   }

   return res.data
};

// getPostById

export const getPostById = async ({id }) => {
    const res = await axios.get(`${API_URL}/posts/${id}`)

    if (!res) {
      console.log("Error fetching data");
    }

    return res.data;
}

