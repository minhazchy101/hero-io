import React, { Suspense } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Outlet } from 'react-router';
const App = () => {
  return (
    <>
      <Navbar />
      <main className=''>
       <Outlet/>
        {/* <h1 class="text-4xl font-bold bg-linear-to-r from-primary via-light-bg to-[#8c6fd0] bg-clip-text text-transparent animate-pulse">
  Animated Heading
</h1> */}

      </main>
      <Footer />
    </>
  );
};

export default App;