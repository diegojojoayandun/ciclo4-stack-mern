import React from "react";
import Welcome from "./components/Welcome";
import ListLawyer from "./components/ListLawyer";
import ListUser from "./components/ListUser";
import Navbar from "./components/helpers/Navbar";
import Footer from "./components/helpers/Footer";
import AddUser from "./components/AddUser";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} exact></Route>
          <Route path="/listusers" element={<ListUser />} exact></Route>
          <Route path="/lawyer/" element={<ListLawyer />} exact />
          <Route path="/adduser" element={<AddUser />} exact />
         

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
