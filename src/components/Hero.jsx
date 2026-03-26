import React from 'react';
import heroImg from '../assets/hero.png'
import appImg from '../assets/app.svg'
import googleImg from '../assets/google.svg'
import { FaQuestion } from 'react-icons/fa';
const Hero = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
        
        <div>

      <h1 className="text-center text-slate-800 text-4xl md:text-6xl font-bold max-w-xl leading-tight bg-clip-text my-2.5 px-4 mx-auto">

        We Build <span className='bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent'>Productive</span> Apps
      </h1>
      <p className="text-center text-base text-gray-600 max-w-5xl px-4">
      At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        </div>
      
      <div className="flex items-center gap-4 mt-5 justify-center z-1">
        <a href='https://play.google.com/store/apps' target='blank' className="flex items-center gap-2 text-indigo-600 border border-gray-400 hover:bg-indigo-50/50 px-6 py-3 rounded-md active:scale-95 transition cursor-pointer font-bold">
          
          <img src={googleImg} alt="googleImG" />
         Google Play
        </a>
        <a href='https://www.apple.com/app-store/' target='blank' className="flex items-center gap-2 text-indigo-600 border border-gray-400 hover:bg-indigo-50/50 px-6 py-3 rounded-md active:scale-95 transition cursor-pointer font-bold">
          
          <img src={appImg} alt="appImG" />
          App Store
        </a>
      </div>

      <div className="relative mt-12 w-full max-w-4xl px-4">
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-full h-full bg-[#d7bef4] blur-[100px] opacity-70 z-0"></div>
        <img className="relative z-1 w-full object-cover object-top" src={heroImg} alt="" />
      </div>
        </div>
    );
};

export default Hero;