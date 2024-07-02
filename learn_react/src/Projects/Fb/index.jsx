import React from "react";
import Login from "./pages/Login";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import ErrorPage from "./pages/ErrorPage";
const Index = () => {

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage/ >,
    element:  <Login />
  },
  {
    path: "/forgot-password",
    element:  <ForgotPassword />
  },
]);


  return <RouterProvider router={router}/>;
};

export default Index;
