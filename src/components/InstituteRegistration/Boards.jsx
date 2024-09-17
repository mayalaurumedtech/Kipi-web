import React, { useState, useEffect } from 'react';
import Buttons from '../custom/Buttons';
import InputCheckbox from '../custom/InputCheckbox';
import { Svg } from '../../utils/constant/Svg';
import mainStyle from './style/InstituteFor.module.css';
import DefaultOrganization from './DefaultOrganization';
import { ImageUrls } from '../../utils/constant/Images';
import Medium from './Medium';

// Initial data for boards, mediums, and Schools
const initialBoards = [
  {
    id: 1,
    type: 'prePrimary',
    svg: ImageUrls.gsebBorad,
    title: 'G.S.E.B',
    peraText: 'Gujarat Secondary and Higher Secondary Education Board',
    selected: false
  },
  {
    id: 2,
    type: 'school',
    svg: ImageUrls.cbseBoard,
    title: 'C.B.S.E',
    peraText: 'Central Board of Secondary Education',
    selected: false
  },
  {
    id: 3,
    type: 'college',
    svg: ImageUrls.icseBoard,
    title: 'ICSE/ISC',
    peraText: 'Indian Certificate of Secondary Education/Indian School Certificate',
    selected: false
  }
];

const initialMediumList = [
  { id: 1, BoardId: 1, title: 'Gujarati Medium', selected: false },
  { id: 2, BoardId: 1, title: 'Hindi Medium', selected: false },
  { id: 3, BoardId: 1, title: 'English Medium', selected: false },
  { id: 4, BoardId: 2, title: 'English Medium', selected: false },
  { id: 5, BoardId: 2, title: 'Hindi Medium', selected: false },
  { id: 6, BoardId: 3, title: 'Gujarati Medium', selected: false },
  { id: 7, BoardId: 3, title: 'Hindi Medium', selected: false },
  { id: 8, BoardId: 3, title: 'English Medium', selected: false },
];

const initialSchoolList = [
  // G.S.E.B Gujarati Medium
  { id: 1, MediumId: 1, svg: Svg.PrePrimary, label: 'Pre Primary', selected: false },
  { id: 2, MediumId: 1, svg: Svg.PrePrimary, label: 'Primary', selected: false },
  { id: 3, MediumId: 1, svg: Svg.PrePrimary, label: 'Secondary', selected: false },
  { id: 4, MediumId: 1, svg: Svg.PrePrimary, label: 'Higher Secondary', selected: false },
  // G.S.E.B Hindi Medium
  { id: 5, MediumId: 2, svg: Svg.PrePrimary, label: 'Pre Primary', selected: false },
  { id: 6, MediumId: 2, svg: Svg.PrePrimary, label: 'Primary', selected: false },
  { id: 7, MediumId: 2, svg: Svg.PrePrimary, label: 'Secondary', selected: false },
  { id: 8, MediumId: 2, svg: Svg.PrePrimary, label: 'Higher Secondary', selected: false },
  // G.S.E.B English Medium
  { id: 9, MediumId: 3, svg: Svg.PrePrimary, label: 'Pre Primary', selected: false },
  { id: 10, MediumId: 3, svg: Svg.PrePrimary, label: 'Primary', selected: false },
  { id: 11, MediumId: 3, svg: Svg.PrePrimary, label: 'Secondary', selected: false },
  { id: 12, MediumId: 3, svg: Svg.PrePrimary, label: 'Higher Secondary', selected: false },
  // C.B.S.E Hindi Medium
  { id: 13, MediumId: 4, svg: Svg.PrePrimary, label: 'Pre Primary', selected: false },
  { id: 14, MediumId: 4, svg: Svg.PrePrimary, label: 'Primary', selected: false },
  { id: 15, MediumId: 4, svg: Svg.PrePrimary, label: 'Secondary', selected: false },
  { id: 16, MediumId: 4, svg: Svg.PrePrimary, label: 'Higher Secondary', selected: false },
  // C.B.S.E English Medium
  { id: 17, MediumId: 5, svg: Svg.PrePrimary, label: 'Pre Primary', selected: false },
  { id: 18, MediumId: 5, svg: Svg.PrePrimary, label: 'Primary', selected: false },
  { id: 19, MediumId: 5, svg: Svg.PrePrimary, label: 'Secondary', selected: false },
  { id: 20, MediumId: 5, svg: Svg.PrePrimary, label: 'Higher Secondary', selected: false },
  // ICSE/ISC Gujarati Medium
  { id: 21, MediumId: 6, svg: Svg.PrePrimary, label: 'Bachelor Of Engineering', selected: false },
  { id: 22, MediumId: 6, svg: Svg.PrePrimary, label: 'Bachelor Of Business Administration', selected: false },
  { id: 23, MediumId: 6, svg: Svg.PrePrimary, label: 'Master Of Business Administration', selected: false },
  // ICSE/ISC Hindi Medium
  { id: 24, MediumId: 7, svg: Svg.PrePrimary, label: 'Bachelor Of Engineering', selected: false },
  { id: 25, MediumId: 7, svg: Svg.PrePrimary, label: 'Bachelor Of Business Administration', selected: false },
  { id: 26, MediumId: 7, svg: Svg.PrePrimary, label: 'Master Of Business Administration', selected: false },
  // ICSE/ISC English Medium
  { id: 27, MediumId: 8, svg: Svg.PrePrimary, label: 'Bachelor Of Engineering', selected: false },
  { id: 28, MediumId: 8, svg: Svg.PrePrimary, label: 'Bachelor Of Business Administration', selected: false },
  { id: 29, MediumId: 8, svg: Svg.PrePrimary, label: 'Master Of Business Administration', selected: false },
];

const Boards = ({ handleStep }) => {
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [Boards, setBoards] = useState(initialBoards);
  const [Mediums, setMediums] = useState(initialMediumList);
  const [schoolList, setSchoolList] = useState(initialSchoolList);

  // Update Boards' selected state based on selected Schools and mediums
  useEffect(() => {
    const updatedBoards = Boards.map(board => {
      // Check if any School related to this board's mediums is selected
      const hasSelectedMediums = schoolList.some(schoolItem => {
        const medium = Mediums.find(m => m.id === schoolItem.MediumId);
        return medium && medium.BoardId === board.id && schoolItem.selected;
      });
      return { ...board, selected: hasSelectedMediums };
    });
    setBoards(updatedBoards);
  }, [schoolList, Mediums]);

  // Handle school selection toggle
  const handleCheckboxChangeSchool = (SchoolId) => {
    const updatedSchoolList = schoolList.map(School => {
      if (School.id === SchoolId) {
        return { ...School, selected: !School.selected };
      }
      return School;
    });
    setSchoolList(updatedSchoolList);
  };

  // Handle board selection and show related mediums and schools
  const handleCheckboxChangeBoard = (id) => {
    setSelectedBoard(id);
  };

  // Render mediums and associated Schools
  const renderRightBoxContent = () => {
    if (selectedBoard) {
      const filteredMediums = Mediums.filter(medium => medium.BoardId === selectedBoard);
      return (
        <Medium
        schoolList={schoolList}
          schoolMediums={filteredMediums}
          handleCheckboxChangeSchool={handleCheckboxChangeSchool}
        />
      );
    }
    return <DefaultOrganization />;
  };

  return (
    <>
      <div className="flex justify-between items-center sm:pt-8 pt-4">
        <div>
          <h2 className="heading">Institute For</h2>
          <p className="paragraph">Select your organization types with boards.</p>
        </div>
        <div className="hidden xl:flex gap-6">
          <Buttons path="" text="Previous" buttonStyle="cusbuttons" onClick={()=>handleStep(-1)} alt="Previous" />
          <Buttons path="" text="Next" buttonStyle="cus-blue-buttons" onClick={()=>handleStep(1)} alt="Next" />
        </div>
      </div>

      <div className={mainStyle.mainBox}>
        <div className={mainStyle.leftBox}>
          {Boards.map(board => (
            <InputCheckbox
              key={board.id}
              checked={board.selected}
              onChange={() => handleCheckboxChangeBoard(board.id)}
              svg={<img src={board.svg} alt={board.title} />}
              titalText={board.title}
              peraText={board.peraText}
              label={board.label}
              borderLeft="ml-4"
              lineClamp="line-clamp-1"
              checkboxContainer="checkboxContainer2"
              isActive={selectedBoard === board.id}
            />
          ))}
        </div>
        <div className={mainStyle.rightBox}>
          {renderRightBoxContent()}
        </div>
      </div>

      <div className="flex justify-between mt-6 xl:hidden">
        <Buttons path="" text="Previous" buttonStyle="cusbuttons" onClick={()=>handleStep(-1)} alt="Previous" />
        <Buttons path="" text="Next" buttonStyle="cus-blue-buttons" onClick={()=>handleStep(1)} alt="Next" />
      </div>
    </>
  );
};

export default Boards;
