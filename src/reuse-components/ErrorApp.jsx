import React from 'react';
import SectionHeader from './SectionHeader';
import appError from '../assets/App-Error.png'
import { useNavigate } from 'react-router';

const ErrorApp = () => {
     const navigate = useNavigate()
    return (
        <div className='section bg-gray-200 min-h-screen flex items-center flex-col justify-center'>
            <div>
                <img src={appError} alt="" />
            </div>
           <SectionHeader
           title={"OPPS!! APP NOT FOUND"}
           subtitle={"The App you are requesting is not found on our system.  please try another apps"}
           /> 
           <button className='btn-primary' onClick={()=>navigate(-1)}>Go Back!</button>
        </div>
    );
};

export default ErrorApp;