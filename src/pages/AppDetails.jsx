import React, { use } from 'react';
import SectionHeader from '../reuse-components/SectionHeader';
import { useParams } from 'react-router';
import ErrorApp from '../reuse-components/ErrorApp';
import downloadIcon from '../assets/icon-downloads.png'
import ratingsIcon from '../assets/icon-ratings.png'
import reviewsIcon from '../assets/icon-review.png'
import toast from 'react-hot-toast';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import RatingsChart from '../components/AppsCom/RatingsChart';
// import { DevTools } from "@recharts/devtools";
const AppDetails = ({appPromise}) => {

  
   const { id } = useParams();

const appData = use(appPromise);

const theApp = appData.find(app => app.id == id);

if (!theApp) return <ErrorApp/>;

const {
  companyName,
  description,
  downloads,
  image,
  ratingAvg,
  ratings,
  reviews,
  size,
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

console.log(size);
const handleInstall =()=>{
    toast.success('Successfully created!');
}
    return (
        <div className='section'>
            {/* <SectionHeader
            title={'App Details'}
            /> */}

             <div className="flex flex-col md:flex-row bg-white max-w-full">
                <img className='w-full md:w-64 h-full object-cover object-top'
                    src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=500&auto=format&fit=crop"
                    //   src={image}
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
                        <h1 className='text-4xl font-bold'>{card.num}</h1>
                    </div>
                 ))  
                       }
                        
                    </div>
                    <button className="px-12 py-2 bg-[#00D390] hover:shadow-lg transition-all text-white mt-6 duration-300 rounded-xl cursor-pointer"
                    onClick={handleInstall}
                    >
                        Install Now (291 MB)
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