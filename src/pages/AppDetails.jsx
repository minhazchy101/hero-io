import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ErrorApp from '../reuse-components/ErrorApp';
import downloadIcon from '../assets/icon-downloads.png'
import ratingsIcon from '../assets/icon-ratings.png'
import reviewsIcon from '../assets/icon-review.png'
import toast from 'react-hot-toast';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import RatingsChart from '../components/AppsCom/RatingsChart';
import { getAllApps, saveTheApp } from '../utility/storeApps';

const AppDetails = ({appPromise}) => {

 const { id } = useParams();
  const appData = use(appPromise);
  const theApp = appData.find(app => app.id === Number(id));
console.log(theApp)
  const [isInstalled, setIsInstalled] = useState(false);

 
  useEffect(() => {
    const installedApps = getAllApps().map(Number); 
    if (installedApps.includes(Number(id))) {
      setIsInstalled(true);
    }
  }, [id]);

  if (!theApp) return <ErrorApp/>;

  const handleInstall = () => {
    const result = saveTheApp(Number(id)); // save as number
    if (result.success) {
      setIsInstalled(true); // update state immediately
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

const {
  companyName,
  description,
  downloads,
  image,
  ratingAvg,
  ratings,
  reviews,
  title
} = theApp;

  const dataCard = [
        {id: 1,
            icon : downloadIcon,
            tag : "Downloads",
            num: downloads
        },
        {id: 2,
            icon : ratingsIcon,
            tag : "Average Ratings",
            num: ratingAvg
        },
        {id: 3,
            icon : reviewsIcon,
            tag : "Total Reviews",
            num: reviews
        },
    ]


    return (
        <div className='section'>
         

             <div className="flex flex-col md:flex-row bg-white max-w-full">
                <img className='w-full md:w-64 h-full object-cover object-top'
                    
                 src={image}
                    alt="image" />
                <div className="p-5">
                    <div className="flex flex-col items-start border-b border-gray-300 pb-8">
                        <h3 className="text-3xl text-slate-800 font-bold">{title}</h3>
                       <p className="max-w-xs text-sm mt-2 text-slate-500">Developed by <span className='text-primary font-semibold'>{companyName}</span> </p>
                    </div>
                    
                     <div className="flex items-center gap-3 mt-5">
                 {dataCard.map(card => (
                     <div key={card.id} className='p-2 space-y-1'>
                        <img src={card.icon} alt="icon" className='max-w-8' />
                        <p className='text-sm'>{card.tag}</p>
                        <h1 className='text-4xl font-bold'>{card.num}M</h1>
                    </div>
                 ))  
                       }
                        
                    </div>
                    <button className={`px-12 py-2 rounded-xl mt-6 duration-300 text-white transition-all ${
        isInstalled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-secondary hover:shadow-lg cursor-pointer'
      }`}
      onClick={handleInstall}
      disabled={isInstalled}
                    >
                   {isInstalled ?  'Installed'   : 'Install Now (291 MB)'}
                    </button>
                </div>
            </div>
            <hr className='my-12 text-gray-300' />
            <div className="max-w-full my-5">
              <RatingsChart ratings={ratings}/>
            </div>
            <hr className='my-12 text-gray-300' />
            <div className='max-w-full my-5'>
                          <h2 className="text-xl font-semibold mb-4">Description</h2>
                          <p className='text-gray-700'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;