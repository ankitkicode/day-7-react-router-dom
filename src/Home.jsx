import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to our Learning Platform</h1>
      <p className="text-lg text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus est.
        Proin eget leo orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
        Duis lobortis sem id eros tincidunt, eu ultricies elit condimentum. Donec ac eros a velit gravida accumsan. 
        Curabitur vel tortor ut nisl varius efficitur a at justo. Nulla facilisi.
      </p>
      <p  className='py-2 px-4 mt-4 bg-gray-950 w-[27%] text-white' >Feel free to explore our courses!</p>
    </div>
  );
}

export default Home;

