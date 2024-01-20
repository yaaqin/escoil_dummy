import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
