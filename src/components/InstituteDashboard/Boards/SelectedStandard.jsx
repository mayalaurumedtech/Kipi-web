import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Select from '../../custom/Select';
import ArrowAnimation from '../../custom/ArrowAnimation';
import { IconsUrls } from '../../../utils/constant/Icons';
import styled from './styles/BoardsOfEducation.module.css';

const StdFeatures = [
    {
        id: 1,
        name: 'Announcements',
        icon: IconsUrls.Announcements,
        title: 'No new updates',
        boxStyle: `${styled.announcements}`,
        standards: [1, 2, 3, 4, 5, 6, 7],
        path: '/announcements'
    },
    {
        id: 2,
        name: 'Exams and Results',
        icon: IconsUrls.ExamsandResults,
        title: 'No new updates',
        boxStyle: `${styled.ExamsandResults}`,
        standards: [1, 2, 3, 4, 5, 6, 7]
    },
    {
        id: 3,
        name: 'Attendants',
        icon: IconsUrls.Attendants,
        title: 'No new updates',
        boxStyle: `${styled.Attendants}`,
        standards: [1, 2, 3, 4, 5, 6, 7]
    },
    {
        id: 4,
        name: 'Student’s List',
        icon: IconsUrls.StudentsList,
        title: 'No new updates',
        boxStyle: `${styled.StudentsList}`,
        standards: [1, 2, 3, 4, 5, 6, 7]
    },
    {
        id: 5,
        name: 'Time Table',
        icon: IconsUrls.TimeTable,
        title: 'No new updates',
        boxStyle: `${styled.TimeTable}`,
        standards: [1, 2, 3, 4, 5, 6, 7]
    },
    {
        id: 6,
        name: 'Fees Collection',
        icon: IconsUrls.FeesCollectionSvg,
        title: 'No new updates',
        boxStyle: `${styled.FeesCollectionSvg}`,
        standards: [1, 2, 3, 4, 5, 6, 7]
    },
    {
        id: 7,
        name: 'Batches and Subjects',
        icon: IconsUrls.BatchesandSubjects,
        title: 'No new updates',
        boxStyle: `${styled.BatchesandSubjects}`,
        standards: [1, 2, 3, 4, 5, 6, 7]
    },
    {
        id: 8,
        name: 'Videos and Notes',
        icon: IconsUrls.VideosandNotes,
        title: 'No new updates',
        boxStyle: `${styled.VideosandNotes}`,
        standards: [1, 2, 3, 4, 5, 6]
    },

];

const StdOptions = [
    { id: 1, value: 1, label: 'Std - 9' },
    { id: 2, value: 2, label: 'Std - 10' },
    { id: 3, value: 3, label: 'Std - 11 (Science)' },
    { id: 4, value: 4, label: 'Std - 12 (Science)' },
    { id: 5, value: 5, label: 'Std - 11 (Commerce)' },
    { id: 6, value: 6, label: 'Std - 12 (Commerce)' },
    { id: 7, value: 7, label: 'Std - 11 (Arts)' },
];

const SelectedStandard = () => {
    const { standardId } = useParams();
    const [filter, setFilter] = useState(StdOptions.find(x => x.id == standardId).value);


    const filteredFeatures = useMemo(() => {
        return StdFeatures.filter((feature) => feature.standards.includes(parseInt(filter)));
    }, [filter]);

    return (
        <>
            <div className="pt-6">
                <h2 className="heading">Central Board of Secondary Education - Gujarati Medium</h2>
                <ul className="flex gap-1 paragraph text-secondaryGrey01">
                    <li><Link to="/institute-landing-dashboard">Home</Link></li>
                    <li>/</li>
                    <li><Link to="/boards-of-education">Boards of Education</Link></li>
                    <li>/</li>
                    <li className="text-primaryBlack font-normal">{standardId}</li>
                </ul>
            </div>

            <div className="pt-3 md:pt-6">
                <Select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="mb-4"
                >
                    {StdOptions.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                {filteredFeatures.length > 0 ? (
                    filteredFeatures.map((value) => (
                        <ArrowAnimation key={value.id} value={value}>
                            <div>
                                <h4 className="heading2">{value.name}</h4>
                                <p className="paragraph2 font-medium line-clamp-1 text-primaryDarkBlue">{value.title}</p>
                            </div>
                        </ArrowAnimation>
                    ))
                ) : (
                    <p>No features available for the selected standard.</p>
                )}
            </div>

        </>
    );
};

export default SelectedStandard;
