import React, { use } from 'react';
import SectionHeader from '../reuse-components/SectionHeader';
import AppCard from '../reuse-components/AppCard';

const Trending = ({appPromise}) => {
    const appData = use(appPromise)
    // console.log(appData)
   return (
        <div className='section min-h-screen py-10 bg-gray-200'>
            <SectionHeader 
            title={`Trending Apps ${appData.length}`}
            subtitle={'Explore All Trending Apps on the Market developed by us'}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
               {appData.slice(0, 8).map(data => (
  <AppCard key={data.id} data={data} />
))}
            </div>
    <button className='btn-primary'>Show All</button>
        </div>
    );
};

export default Trending;