import React from "react";
import Navbar from "./Navbar";
import { Route,  Routes } from "react-router-dom"; // Import BrowserRouter as Router

import About from "./About";
import Course from "./Course"; // Assuming Course component is imported
import Home from "./Home";
import Contact from "./Contact"

const App = () => {
  return (
    
      <div>
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Home />}  />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
   
  );
};

export default App;
