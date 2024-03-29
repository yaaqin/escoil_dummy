import React from "react";
import {
  createBrowserRouter,
  RouterProvider, Navigate
} from "react-router-dom";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Posting from "./Pages/Posting";
import Login from "./Pages/Login";

const ProtectedRoute = ({ user, children }) => {
  console.log('queen')
  if (localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined) {
    console.log('queen3')
    return children;
  } else {
    console.log('queen2')
    return <Navigate to="/login" replace />;
  }
};

const router = createBrowserRouter([
  {
    path: "/profile",
    element: 
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>,
  },
  {
    path: "/",
    element: 
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  },
  {
    path: "/login",
    element: <Login />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
