import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";

const App = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="logo text-center h2 mb-4">Skelton Screen Loading</div>
      <div className="text-center">
        <div className="row  py-5 d-inline-block ">
          <Link to={"/"} className="nav-text">
            Home
          </Link>
          <Link className="nav-text">about</Link>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user/:id" element={<User />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
