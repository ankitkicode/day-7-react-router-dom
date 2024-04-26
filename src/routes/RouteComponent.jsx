import React from 'react'
import { Route, Routes } from "react-router-dom"; // Import BrowserRouter as Router
import About from "../About";
import Course from "../Course"; // Assuming Course component is imported
import Home from "../Home";
import Contact from "../Contact";
import CourseDetails from "../CourseDetails";
import PageNotFound from "../PageNotFound";

const RouteComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />}>
          <Route path="/course/:id" element={<CourseDetails />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default RouteComponent
