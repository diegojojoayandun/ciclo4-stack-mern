import React from "react";
import Welcome from "./components/Welcome";
import Navbar from "./components/helpers/Navbar";
import Footer from "./components/helpers/Footer";
//import AddUser from "./components/AddUser";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import ListAll from "./components/ListAll";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} exact></Route>
          <Route path="/listusers" element={<ListAll />} exact></Route>
          <Route path="/lawyer/" element={<Test />} exact />
          <Route path="/adduser" element={<Signup />} exact />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
