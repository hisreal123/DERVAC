import React from 'react'
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgotPassword from '../pages/ForgotPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
}
