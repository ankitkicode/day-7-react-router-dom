import React from 'react';

const Home = () => {
  return (
    <div className="bg-contain bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D')` }}>
      <div className="flex items-center justify-center h-screen">
        <div className="container mx-auto px-4 py-8 text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Welcome to our Learning Platform</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus est.
            Proin eget leo orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
            Duis lobortis sem id eros tincidunt, eu ultricies elit condimentum. Donec ac eros a velit gravida accumsan. 
            Curabitur vel tortor ut nisl varius efficitur a at justo. Nulla facilisi.
          </p>
          <p className="py-2 px-4 mt-4 bg-gray-900 inline-block">Feel free to explore our courses!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
