import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

// Sample data for courses
const courses = [
  {
    id: 1,
    title: 'Course 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus est.',
    instructor: 'John Doe',
    price: '$99',
  },
  {
    id: 2,
    title: 'Course 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus est.',
    instructor: 'Jane Smith',
    price: '$149',
  },
  {
    id: 3,
    title: 'Course 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus est.',
    instructor: 'Ankit kumar',
    price: '$349',
  },
  // Add more courses here if needed
];

const Course = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map(course => (
          <Link to={`/course/${course.id}`} key={course.id}>
            <div key={course.id} className={`bg-white shadow-md rounded-lg p-4 ${pathname === `/course/${course.id}` ? 'border-2 border-blue-500' : ''}`}>
              <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            </div>
          </Link>
        ))}
      </div>
      <br /><br />
      <hr />
      <Outlet />
    </div>
  );
}

export default Course;
