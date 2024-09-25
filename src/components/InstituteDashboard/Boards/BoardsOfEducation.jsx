import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../../custom/Buttons';
import { Svg } from '../../../utils/constant/Svg';
import { ImageUrls } from '../../../utils/constant/Images';
import ArrowAnimation from '../../custom/ArrowAnimation';
import Modal from '../../custom/Modal';
import { IconsUrls } from '../../../utils/constant/Icons';
import QuickActionsArrowAnim from '../../custom/QuickActionsArrowAnim';
import styled from './styles/BoardsOfEducation.module.css';

const Boards = [
    {
        id: 1,
        name: 'G.S.E.B',
        title: 'Gujarat Secondary and Higher Secondary Education Board',
        icon: ImageUrls.gsebBorad,
        medium: 'Gujarati Medium',
    },
    {
        id: 2,
        name: 'C.B.S.E',
        title: 'Central Board of Secondary Education',
        icon: ImageUrls.cbseBoard,
        medium: 'Gujarati Medium',
    },
    {
        id: 3,
        name: 'C.B.S.E',
        title: 'Central Board of Secondary Education',
        icon: ImageUrls.cbseBoard,
        medium: 'English Medium',
    },
    {
        id: 4,
        name: 'ICSE/ISC',
        title: 'Indian Certificate of Secondary Education/Indian School Certificate',
        icon: ImageUrls.icseBoard,
        medium: 'English Medium',
    },

];

const secondaryClasses = [
    { id: 1, icons: IconsUrls.Badge, name: 'Std - 9', path: '/boards-of-education/9' },
    { id: 2, icons: IconsUrls.Badge, name: 'Std - 10', path: '/boards-of-education/10' },
];

const HigersecondaryClasses = [
    { id: 1, icons: IconsUrls.Badge, name: 'Std - 11(Science)', path: '/boards-of-education/11-science' },
    { id: 2, icons: IconsUrls.Badge, name: 'Std - 12(Science)', path: '/boards-of-education/12-science' },
    { id: 3, icons: IconsUrls.Badge, name: 'Std - 11(Commerce)', path: '/boards-of-education/11-commerce' },
    { id: 4, icons: IconsUrls.Badge, name: 'Std - 12(Commerce)', path: '/boards-of-education/12-commerce' },
    { id: 5, icons: IconsUrls.Badge, name: 'Std - 11(Arts)', path: '/boards-of-education/11-arts' },
];

const BoardsOfEducation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="flex justify-between pt-6">
                <div>
                    <h2 className="heading">Boards of Education</h2>
                    <ul className="flex gap-1 paragraph text-secondaryGrey01">
                        <li><Link to="/institute-landing-dashboard">Home</Link></li>
                        <li>/</li>
                        <li className="text-primaryBlack font-normal">Boards of Education</li>
                    </ul>

                </div>
                <Buttons path="/institute-registration" svg={Svg.PluseSvg} text="Add New Board" buttonStyle="cusbuttons" alt="Add New Board" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {Boards.map((value) => (
                    <ArrowAnimation value={value} openModal={openModal} >
                        <div>
                            <h4 className="heading2">{value.name}</h4>
                            <p className="paragraph font-normal line-clamp-1">{value.title}</p>
                            <p className="paragraph2 line-clamp-1 text-primaryDarkBlue">{value.medium}</p>
                        </div>
                    </ArrowAnimation>
                ))}
            </div>


            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className={styled.modalBox}>
                        <h2 className="title mb-4">Selected Standard</h2>
                        <div className={styled.innerModalBox}>
                            <p className="paragraph2 md:pt-8">Secondary Classes</p>
                            <div className="pt-6 flex flex-col gap-4">
                                {secondaryClasses.map((action, index) => (
                                    <Link to={action.path} key={index}>
                                        <QuickActionsArrowAnim
                                            action={action}
                                            className="border border-territoryGreyOutline rounded-2xl transition-all hover:border-primaryBlue hover:shadow-custom-shadow01 hover:shadow-primaryBlue"
                                        />
                                    </Link>
                                ))}
                            </div>

                            <p className="paragraph2 pt-3 md:pt-6">Higer Secondary Classes</p>
                            <div className="pt-6 flex flex-col gap-4">
                                {HigersecondaryClasses.map((action, index) => (
                                    <Link to={action.path} key={index}>
                                        <QuickActionsArrowAnim
                                            action={action}
                                            className="border border-territoryGreyOutline rounded-2xl transition-all hover:border-primaryBlue hover:shadow-custom-shadow01 hover:shadow-primaryBlue"
                                        />
                                    </Link>
                                ))}
                            </div>

                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default BoardsOfEducation