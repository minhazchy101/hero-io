import React from 'react';

const Metrics = () => {
    const metricsItems = [
        {id: 1,
            title: 'Total Downloads',
            number :'29.6M' ,
            percent: '21% More Than Last Month'
        },
        {id: 2,
            title: 'Total Reviews',
            number :'906K' ,
            percent: '45% More Than Last Month'
        },
        {id: 3,
            title: 'Active Apps',
            number :'132+' ,
            percent: '31 more will Launch'
        },
    ]
    return (
        <>
         
            <div className="max-w-full py-10 flex flex-col items-center justify-center text-center bg-linear-to-l from-[#7523c1] to-primary p-10 text-white">
               
                <h1 className="text-3xl md:text-5xl md:leading-15 font-bold max-w-5xl my-3 bg-linear-to-r from-white to-[#CAABFF] text-transparent bg-clip-text">Trusted by Millions, Built for You</h1>

                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
               {metricsItems.map(item =>(
                <div key={item.id} className='flex flex-col items-center p-4 space-y-3'>
                    <p className='text-sm'>{item.title}</p>
                    <h1 className='text-3xl md:text-5xl md:leading-15 font-bold'>{item.number}</h1>
                    <p className='text-sm'>{item.percent}</p>
                 </div>
               ))  }
                
                </div>
               
            </div>
            
        </>
    );
};

export default Metrics;