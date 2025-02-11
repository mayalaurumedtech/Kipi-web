import React, { useState, useEffect } from 'react';
import Buttons from '../custom/Buttons';
import InputCheckbox from '../custom/InputCheckbox';
import { Svg } from '../../utils/constant/Svg';
import mainStyle from './style/InstituteFor.module.css';
import DefaultOrganization from './DefaultOrganization';
import School from './School';
import { ImageUrls } from '../../utils/constant/Images';

const initialOrganizations = [
  {
    id: 1,
    type: 'PlayGroup',
    svg: Svg.PrePrimary,
    label: 'Play Group',
    selected: false
  },
  {
    id: 2,
    type: 'school',
    svg: Svg.SchoolGraySvg,
    label: 'School',
    selected: false
  },
  {
    id: 3,
    type: 'college',
    svg: Svg.CollegeGraySvg,
    label: 'College',
    selected: false
  },
  {
    id: 4,
    type: 'competitiveExam',
    svg: Svg.ExamFile,
    label: 'Competitive Exam',
    selected: false
  }
];

const initialBoardList = [
  {
    id: 1,
    board: 'gsebBoards',
    img: ImageUrls.gsebBorad,
    title: 'G.S.E.B',
    peraText: 'Gujarat Secondary and Higher Secondary Education Board',
    organizationId: 2, // Related to 'School'
    selected: false
  },
  {
    id: 2,
    board: 'cbseBoards',
    img: ImageUrls.cbseBoard,
    title: 'C.B.S.E',
    peraText: 'Central Board of Secondary Education',
    organizationId: 2, // Related to 'School'
    selected: false
  },
  {
    id: 3,
    board: 'icseBoards',
    img: ImageUrls.icseBoard,
    title: 'ICSE/ISC',
    peraText: 'Indian Certificate of Secondary Education/Indian School Certificate',
    organizationId: 2, // Related to 'School'
    selected: false
  },
  {
    id: 4,
    board: 'gtuUniverse',
    img: ImageUrls.gtuUniverse,
    title: 'G.T.U',
    peraText: 'Gujarat Secondary and Higher Secondary Education Board',
    organizationId: 3, // Related to 'College'
    selected: false
  },
  {
    id: 5,
    board: 'guUniverse',
    img: ImageUrls.guUniverse,
    title: 'G.U',
    peraText: 'Central Board of Secondary Education',
    organizationId: 3, // Related to 'College'
    selected: false
  },
  {
    id: 6,
    board: 'ldcUniverse',
    img: ImageUrls.ldcUniverse,
    title: 'L.D. College ',
    peraText: 'Indian Certificate of Secondary Education/Indian School Certificate',
    organizationId: 3, // Related to 'College'
    selected: false
  },
 
];

const Organization = ({ handleStep }) => {
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [organizations, setOrganizations] = useState(initialOrganizations);
  const [boardList, setBoardList] = useState(initialBoardList);

  useEffect(() => {
    // Update organization selection based on board selection
    const updatedOrganizations = organizations.map(org => {
      const hasSelectedBoards = boardList.some(board => board.organizationId === org.id && board.selected);
      return { ...org, selected: hasSelectedBoards };
    });
    setOrganizations(updatedOrganizations);
  }, [boardList]);

  const handleCheckboxChangeBoard = (boardId) => {
    let orgId=null;
    const updatedBoardList = boardList.map(board =>{
      if( board.id === boardId ){
        // setCurrentOrganisation(board.organizationId)
        orgId=board.organizationId;
        return  { ...board, selected: !board.selected }
      }
      return board;
    }
    );
    if(orgId){
      const updatedOrganizations = organizations.map((org) => {
        if (orgId === org.id) {
          return { ...org, selected: !org.selected };
        }
        return org;
      });
      setOrganizations(updatedOrganizations);
    }
    setBoardList(updatedBoardList);
  };

  const handleCheckboxChangeOrg = (id) => {
    const updatedOrganizations = organizations.map((org) => {
      if (id === org.id) {
        setSelectedOrganization(org.id);
        // return { ...org, selected: !org.selected };
      }
      return org;
    });
    setOrganizations(updatedOrganizations);
  };

  const renderRightBoxContent = () => {
    if (selectedOrganization) {
      const filteredBoardList = boardList.filter(board => board.organizationId === selectedOrganization);
      return <School schoolBoardList={filteredBoardList} handleCheckboxChangeBoard={handleCheckboxChangeBoard} />;
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
          {organizations.map((organization, index) => (
            <InputCheckbox
              key={index}
              checked={organization.selected}
              onChange={() => handleCheckboxChangeOrg(organization.id)}
              svg={organization.svg}
              label={organization.label}
              borderLeft="ml-4"
              checkboxContainer="checkboxContainer"
              isActive={selectedOrganization === organization.id}
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

export default Organization;
