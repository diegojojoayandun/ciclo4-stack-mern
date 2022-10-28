import React from "react";
import Welcome from "./components/Welcome";
import Navbar from "./components/helpers/Navbar";
import Footer from "./components/helpers/Footer";
//import AddUser from "./components/AddUser";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import ListUsers from "./components/ListUsers";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} ></Route>
          <Route path="/listusers" element={<ListUsers />} ></Route>
          <Route path="/lawyer/" element={<Test />} />
          <Route path="/adduser" element={<Signup />} />
          <Route path="/edit/:id" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
