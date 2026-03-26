import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const AppCard= ({data}) => {
    const navigate = useNavigate()
    const {id,title,downloads, ratingAvg, image} = data
    return (
        
            <div onClick={()=> navigate(`/app-details/${id}`)} className="bg-white rounded-2xl pb-4 overflow-hidden border border-gray-300 hover:-translate-y-1 transition duration-300">
                <img className="w-full h-72 object-cover object-top p-2 rounded-2xl" src={image} />
                <div className="flex flex-col p-2">
                    <p className="font-medium mt-3 text-center">{title}</p>
                    <div className='flex justify-between gap-5'>
                    <p className="flex items-center gap-1 border text-sm text-secondary bg-[#8ddfc567] border-gray-200 px-1 py-0.5 rounded-xl mt-5">
                     <FaDownload/>   {downloads}M
                    </p>
                    <p className="flex items-center gap-1 border text-sm text-[#FF8811] bg-[#e0c5ad53] border-gray-200 px-1 py-0.5 rounded-xl mt-5">
                   <FaStar className='text-[#FF8811]'/>{ratingAvg}
                    </p>

                    </div>
                </div>
            </div>
        
            
        
    );
};

export default AppCard;