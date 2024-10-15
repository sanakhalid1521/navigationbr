// pages/home.tsx
import React from 'react';
import Navbar from '../../../app/components/navbar'; 

const Home = () => {
  return (
    <>
      <Navbar/> 
      <h1 className="text-4xl font-extrabold text-center text-white bg-gray-900 p-6 mt-4">
  Welcome to the Home Page
</h1>
    </>
  );
};

export default Home;

