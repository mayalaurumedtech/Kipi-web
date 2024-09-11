import React from 'react';
import { IoIosClose } from 'react-icons/io';

const NoDataFound = ({ message }) => {
    return (
        <div  >
           {message.length>0?message:"No data found!"}
        </div>
    );
};

export default NoDataFound;
