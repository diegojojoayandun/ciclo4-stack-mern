import React from "react";
// import Navbar from "./components/helpers/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import ListUsers from "./components/ListUsers";
import Login from "./components/Login";
import Navbar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/listusers" element={<ListUsers />}></Route>
          <Route path="/adduser" element={<Signup />} />
          <Route path="/edit/:id" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
