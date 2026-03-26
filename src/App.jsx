import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';
import Loader from './reuse-components/Loader';

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Toaster />

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default App;