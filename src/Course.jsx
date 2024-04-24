import React from 'react';

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
  // Add more courses here if needed
];

const Course = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-700 mb-2">{course.description}</p>
            <p className="text-gray-600">Instructor: {course.instructor}</p>
            <p className="text-gray-600">Price: {course.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
