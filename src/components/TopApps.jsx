import React, { use } from 'react';
import SectionHeader from '../reuse-components/SectionHeader';
import AppCard from '../reuse-components/AppCard';
import { Link } from 'react-router';

const TopApps = ({appPromise}) => {
    const appData = use(appPromise)
    // console.log(appData)
   return (
        <div className='section min-h-screen py-10 bg-gray-200'>
            <SectionHeader 
            title={`Trending Apps`}
            subtitle={'Explore All Trending Apps on the Market developed by us'}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
               {appData.slice(0, 8).map(data => (
  <AppCard key={data.id} data={data} />
))}
            </div>
            <Link to={'/apps'} className='flex justify-center'>

    <button className='btn-primary'>Show All</button>
            </Link>
        </div>
    );
};

export default TopApps;