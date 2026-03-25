import React, { Suspense } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Trending from './components/Trending';
import Loader from './reuse-components/Loader';
const App = () => {
  const appPromise = fetch('/apps.json').then(res => res.json())
  return (
    <>
      <Navbar />
      <main className='mt-16'>
        <Hero />
        <Metrics />
        <Suspense fallback={<Loader/>}>
        <Trending appPromise={appPromise} />

        </Suspense>
        {/* <h1 class="text-4xl font-bold bg-linear-to-r from-primary via-light-bg to-[#8c6fd0] bg-clip-text text-transparent animate-pulse">
  Animated Heading
</h1> */}

      </main>
      <Footer />
    </>
  );
};

export default App;