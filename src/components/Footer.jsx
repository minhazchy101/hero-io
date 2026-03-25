import React from 'react';
import Logo from '../reuse-components/Logo';

const Footer = () => {
    return (
        <>
         <footer className="w-full bg-linear-to-b from-light-bg to-[#a987d862] text-gray-800 section">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className='my-4'>
                 <Logo/>    
                </div>
              
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    Empowering creators worldwide with the most advanced AI content creation tools. Transform your ideas
                    into reality.
                </p>
            </div>
            <div className="border-t border-base-100">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="/">HERO.IO</a> ©{new Date().getFullYear()}. All rights reserved.
                </div>
            </div>
        </footer>     
        </>
      
    );
};

export default Footer;