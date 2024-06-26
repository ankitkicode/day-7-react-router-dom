import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [users, setUsers] = useState([]);

  const getUsers =  async () => {
   await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) =>  setUsers(res.data))
      .catch((err) => console.error(err));
  };

  // Sample data for courses
  const courses = [
    {
      id: 1,
      title: "Course 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus est.",
      instructor: "John Doe",
      price: "$99",
    },
    {
      id: 2,
      title: "Course 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus est.",
      instructor: "Jane Smith",
      price: "$149",
    },
    {
      id: 3,
      title: "Course 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus est.",
      instructor: "Ankit kumar",
      price: "$349",
    },
    // Add more courses here if needed
  ];

  // Find the course with the matching ID
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) return <div>Course not found</div>;

  return (
    <div className="w-[90%] m-auto py-4">
      <h2 className="text-xl font-bold mb-2">{course.title}</h2>
      <p className="text-gray-700 mb-2">{course.description}</p>
      <p className="text-gray-600">Instructor: {course.instructor}</p>
      <p className="text-gray-600">Price: {course.price}</p>

      <button
        className="py-2 px-4 mt-4 bg-gray-950 text-white"
        onClick={() => {
          navigate("/course");
        }}
      >
        {" "}
        Back to Courses{" "}
      </button>
      <button
        className="py-2 px-4 mt-4 bg-gray-950 text-white ml-4"
        onClick={getUsers}
      >
        {" "}
        Get alluser{" "}
      </button>
      <div>
        {users.map(user => (
          <div key={user.id}>
            {/* Display user information here */}
           <ul>
            <li> Name: {user.name}</li>
            
            <li>Email : {user.email}</li>
           </ul>
            {/* Add more user information as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
