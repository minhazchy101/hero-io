import React from 'react';

const AppCard= ({data}) => {
    const {title, size, reviews} = data
    return (
        
            <div className="bg-white rounded-2xl pb-4 overflow-hidden border border-gray-300 hover:-translate-y-1 transition duration-300">
                <img className="w-full h-52 object-cover object-top p-2 rounded-2xl" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400" alt="userImage2" />
                <div className="flex flex-col p-2">
                    <p className="font-medium mt-3 text-center">{title}</p>
                    {/* <p className="text-gray-500 text-sm">kelvin.john@gmail.com</p> */}
                    <div className='flex justify-between gap-5'>
                    <button className="border text-sm text-gray-500 border-gray-200 hover:bg-gray-100 transition cursor-pointer px-6 py-1 rounded-full mt-5">
                        <p className="mb-1">{size}</p>
                    </button>
                    <button className="border text-sm text-gray-500 border-gray-200 hover:bg-gray-100 transition cursor-pointer px-6 py-1 rounded-full mt-5">
                        <p className="mb-1">{reviews}</p>
                    </button>

                    </div>
                </div>
            </div>
        
            
        
    );
};

export default AppCard;