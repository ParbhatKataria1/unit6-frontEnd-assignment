import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Notes from "../Pages/Notes";
import Post from "../Pages/Post";
import Register from "../Pages/Register";

const PublicRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
};

export default PublicRoutes;
