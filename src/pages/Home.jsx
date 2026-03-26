import React, { Suspense } from 'react';
import Hero from '../components/Hero';
import States from '../components/States';
import Loader from '../reuse-components/Loader';
import TopApps from '../components/TopApps';

const Home = ({appPromise}) => {
   
    return (
        <>
          <Hero />
        <States />
        <Suspense fallback={<Loader/>}>
        <TopApps appPromise={appPromise} />

        </Suspense>   
        </>
    );
};

export default Home;