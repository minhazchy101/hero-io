import React, { Suspense } from 'react';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import Loader from '../reuse-components/Loader';
import Trending from '../components/Trending';

const Home = ({appPromise}) => {
   
    return (
        <>
          <Hero />
        <Metrics />
        <Suspense fallback={<Loader/>}>
        <Trending appPromise={appPromise} />

        </Suspense>   
        </>
    );
};

export default Home;