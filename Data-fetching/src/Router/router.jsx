import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import PostDetails from "../pages/PostDetails";
import Counter from "../components/Counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/post/:id",
    element: <PostDetails />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
