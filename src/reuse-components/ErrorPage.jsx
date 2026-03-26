import React from 'react';
import errorImg from '../assets/error-404.png'
import { useNavigate } from 'react-router';
import SectionHeader from './SectionHeader';
const ErrorPage = () => {
    const navigate = useNavigate()
    return (
           <div className='section bg-gray-200 min-h-screen flex items-center flex-col justify-center'>
            <div>
                <img src={errorImg} alt="" />
            </div>
           <SectionHeader
           title={"Oops, page not found!"}
           subtitle={"The page you are looking for is not available."}
           /> 
           <button className='btn-primary' onClick={()=>navigate(-1)}>Go Back!</button>
        </div>
    );
};

export default ErrorPage;