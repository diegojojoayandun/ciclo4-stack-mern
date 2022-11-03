import React from "react";
// import Navbar from "./components/helpers/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import ListUsers from "./components/ListUsers";
import Test from "./components/Test";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/listusers" element={<ListUsers />}></Route>
          <Route path="/lawyer/" element={<Test />} />
          <Route path="/adduser" element={<Signup />} />
          <Route path="/edit/:id" element={<Signup />} />
          <Route path="/testing" element={<Test />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
