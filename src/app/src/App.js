import React from "react";
import ListLawyer from "./components/ListLawyer";
import ListUser from "./components/ListUser";
import Navbar from "./components/helpers/Navbar";
import AddUser from "./components/AddUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListUser />} exact></Route>
          <Route path="/lawyer/" element={<ListLawyer />} exact />
          <Route path="/adduser" element={<AddUser />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
