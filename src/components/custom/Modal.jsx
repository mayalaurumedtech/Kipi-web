import React from 'react';
import { IoIosClose } from 'react-icons/io';

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-primaryBlack bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="bg-primaryWhite rounded-3xl overflow-hidden shadow-xl w-auto h-auto">
                <div className="flex justify-end">
                    <button onClick={onClose} className="bg-secondaryGrey03 mt-4 mr-4 rounded-full sm:w-10 w-7 h-7 sm:h-10 flex justify-center items-center">
                        <IoIosClose className="text-lg sm:text-2xl text-secondaryGrey02" />
                    </button>
                </div>
                <div className="px-4 pb-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
