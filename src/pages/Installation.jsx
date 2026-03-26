import React, { use, useEffect, useState } from 'react';
import SectionHeader from '../reuse-components/SectionHeader';
import { getAllApps, unInstallTheApp } from '../utility/storeApps';
import { FaDownload, FaStar } from 'react-icons/fa';
import toast from 'react-hot-toast';
import Select from 'react-select';

const Installation = ({appPromise}) => {
    const allApp = use(appPromise)
    const [yourApp, setYourApp] = useState([])
      const [selectedOption, setSelectedOption] = useState(null);
      
    useEffect(()=>{
       const installedApp = getAllApps().map(Number);
        const appList = allApp.filter(app => installedApp.includes(app.id))
      return setYourApp(appList)
       },[])
      const handleUnInstall =(id)=>{
        const result = unInstallTheApp(id);

  if (result.success) {
      const updatedApps = yourApp.filter(app => app.id !== id);
    setYourApp(updatedApps); 
    toast.success(result.message);
  } else {
    toast.error("Something Wrong");
  }
       }

       const handleSort =(sortType)=>{
        console.log(sortType)
        // setSort(sortType)
        if (sortType === "Low-High") {
            const sortAppLH = [...yourApp].sort((a,b)=> a.downloads- b.downloads)
            console.log(sortAppLH)
          return  setYourApp(sortAppLH)
        }
        if(sortType === "High-Low"){
         const sortAppHL = [...yourApp].sort((a,b)=> b.downloads - a.downloads)
         return setYourApp(sortAppHL)
        }
       }

       const options = [
  { value: 'High-Low', label: 'High-Low' },
  { value: 'Low-High', label: 'Low-High' },
//   { value: 'vanilla', label: 'Vanilla' },
];
    return (
        <div className='section max-h-full min-h-screen'>
           <SectionHeader title={"Your Installed Apps"} subtitle={"Explore All Trending Apps on the Market developed by us"}/> 
           <div className="flex justify-between mb-4">
                   <h1 className='text-xl font-bold'>
                     ({yourApp.length}) Apps Found
                   </h1>
           
                   {/* <div className="flex items-center border pl-4 gap-2 border-gray-500/30 h-11.5 rounded-full overflow-hidden max-w-md w-full"> */}
                      <Select
             className='text-black'
        defaultValue={selectedOption}
        onChange={(option) => {
        setSelectedOption(option);
        handleSort(option.value);
    }}
        options={options}
      />
                   {/* </div> */}
                 </div>
                 <div className="space-y-4">
       {yourApp && yourApp.length > 0 ? (
  yourApp.map(app => (
    <div key={app.id} className="flex items-center gap-5 p-5 max-w-full rounded-md border border-gray-300 text-gray-800">
      <img
        className="w-12 h-12 object-cover opacity-60"
        src={app.image}
        alt={app.title}
      />
      <div className="flex flex-col">
        <h3 className="font-medium">{app.title}</h3>
        <p className="text-sm text-gray-500">{app.companyName}</p>
        <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
          <span className='flex items-center gap-0.5 text-secondary'><FaDownload/> {app.downloads}M</span>
          <span className='flex items-center gap-0.5 text-[#FF8811]'><FaStar/> {app.ratingAvg}</span>
          <span>{app.size} MB</span>
        </div>
      </div>
      <button 
      onClick={()=>handleUnInstall(app.id)}
      className="ml-auto px-4 py-2 bg-secondary text-white rounded hover:bg-green-600 transition">
        Uninstall
      </button>
    </div>
  ))
) : (
  <SectionHeader title={'No apps installed yet'} />
)}
        </div>
        </div>

    );
};

export default Installation;