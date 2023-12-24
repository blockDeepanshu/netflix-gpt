import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../auth/Login";
import Browse from "./Browse";

const Main = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Main;
