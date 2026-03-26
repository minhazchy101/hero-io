import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png'

const Logo = () => {
    return (
         <Link to={'/'} className="flex gap-2 items-center">
               <img src={logo} className="w-12" alt="" />
               <span className="font-bold text-primary text-xl">HERO.IO</span>
             </Link>
    );
};

export default Logo;