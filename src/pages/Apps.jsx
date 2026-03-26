import React, { use, useState } from 'react';
import SectionHeader from '../reuse-components/SectionHeader';
import AppCard from '../reuse-components/AppCard';
import { FaSearch } from 'react-icons/fa';
import ErrorApp from '../reuse-components/ErrorApp';

const Apps = ({ appPromise }) => {
  const appData = use(appPromise);
  const [search, setSearch] = useState('');

  const filteredApps = appData.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
 <>  <div className='section min-h-screen'>
      <SectionHeader 
        title={"Our All Applications"}
        subtitle={"Explore All Apps on the Market developed by us. We code for Millions"}
      />

      <div className="flex justify-between mb-4">
        <h1 className='text-xl font-bold'>
          ({filteredApps.length}) Apps Found
        </h1>

        <div className="flex items-center border pl-4 gap-2 border-gray-500/30 h-11.5 rounded-full overflow-hidden max-w-md w-full">
          <FaSearch />
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="w-full h-full outline-none text-gray-500 bg-transparent placeholder-gray-500 text-sm"
          />
        </div>
      </div>
      {filteredApps.length == 0 ?
    <div className='flex flex-col items-center justify-center min-h-[40vh]'>
      <SectionHeader
      title={"No Apps Found"}
      />
      <button className='btn-primary'  onClick={()=>setSearch('')}>Show All Apps</button>
    </div>
     : 
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
        {filteredApps.map(data => (
          <AppCard key={data.id} data={data} />
        ))}
      </div>}
    </div></>
  );
};

export default Apps;