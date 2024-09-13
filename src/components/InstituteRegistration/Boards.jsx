import React, { useState, useEffect } from 'react';
import Buttons from '../custom/Buttons';
import InputCheckbox from '../custom/InputCheckbox';
import { Svg } from '../../utils/constant/Svg';
import mainStyle from './style/InstituteFor.module.css';
import DefaultOrganization from './DefaultOrganization';
import { ImageUrls } from '../../utils/constant/Images';
import Medium from './Medium';

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
  {
    id: 1,
    Medium: 'cbseBoards',
    title: 'Gujarati Medium',
    BoardId: 2, 
    selected: false,
    content: <p>This is the content for section 1.</p>,
  },
  {
    id: 2,
    Medium: 'cbseBoards',
    title: 'Hindi Medium',
    content: <p>This is the content for section 1.</p>,
    BoardId: 2, 
    selected: false
  },
  {
    id: 3,
    Medium: 'icseBoards',
    title: 'English Medium',
    content: <p>This is the content for section 1.</p>,
    BoardId: 2, 
    selected: false
  },
  {
    id: 4,
    Medium: 'gtuUniverse',
    title: 'G.T.U',
    BoardId: 3, 
    selected: false
  },
  {
    id: 5,
    Medium: 'guUniverse',
    title: 'G.U',
    BoardId: 3, 
    selected: false
  },
  {
    id: 6,
    Medium: 'ldcUniverse',
    title: 'L.D. College ',
    BoardId: 3, 
    selected: false
  },

];

const initialClassList = [
  {
    id: 1,
    type: 'prePrimary',
    svg: Svg.PrePrimary,
    label: 'Pre Primary',
    MediumId: 2,
    selected: false
  },
  {
    id: 2,
    type: 'Primary',
    svg: Svg.PrePrimary,
    label: 'Primary',
    selected: false,
    MediumId: 2,

  },
  {
    id: 3,
    type: 'Secondary',
    svg: Svg.PrePrimary,
    label: 'Secondary',
    MediumId: 2,

    selected: false
  },
  {
    id: 4,
    type: 'Higher Secondary',
    svg: Svg.PrePrimary,
    label: 'Higher Secondary',
    MediumId: 2,

    selected: false
  }
];

const Boards = ({ handleNextStep, handlePrevStep }) => {
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [Boards, setBoards] = useState(initialBoards);
  const [selectedMedium, setSelectedMedium] = useState(null);
  const [Mediums, setMediums] = useState(initialMediumList);
  const [classList, setClassList] = useState(initialClassList);

  useEffect(() => {
    // Update Board selection based on board selection
    const updatedBoards = Boards.map(Bo => {
      const hasSelectedMediums = classList.some(c =>{
        const m= Mediums.find(m=> m.id === c.MediumId)
        return m && m.BoardId === Bo.id && c.selected
      });
      return { ...Bo, selected: hasSelectedMediums };
    });

    setBoards(updatedBoards);
  }, [classList]);

  const handleCheckboxChangeMedium = (MediumId) => {
  //   const updatedMediums = Mediums.map(Medium => {
  //     debugger
  //     if (Medium.id === MediumId) {
  //       Medium = Medium.Medium;
  //       return { ...Medium, selected: !Medium.selected }
  //     }
  //     return Medium;
  //   }
  // );
  const updatedClass = classList.map(c => {
    if (c.id === MediumId) {
      return { ...c, selected: !Medium.selected }
    }
    return c;
  }
);
    setClassList(updatedClass);
  };

  const handleCheckboxChangeBo = (id) => {
    const updatedBoards = Boards.map((Bo) => {
      if (id === Bo.id) {
        setSelectedBoard(Bo.id);
        // return { ...Bo, selected: !Bo.selected };
      }
      return Bo;
    });
    setBoards(updatedBoards);
  };


  const renderRightBoxContent = () => {
    if (selectedBoard) {
      const filteredMediums = Mediums.filter(Medium => Medium.BoardId === selectedBoard);
      return <Medium classList={classList} schoolMediums={filteredMediums} handleCheckboxChangeMedium={handleCheckboxChangeMedium} selectedMedium={selectedMedium} />;
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
          <Buttons path="" text="Previous" buttonStyle="cusbuttons" onClick={handlePrevStep} alt="Previous" />
          <Buttons path="" text="Next" buttonStyle="cus-blue-buttons" onClick={handleNextStep} alt="Next" />
        </div>
      </div>

      <div className={mainStyle.mainBox}>
        <div className={mainStyle.leftBox}>
          {Boards.map((Board, index) => (
            <InputCheckbox
              key={index}
              checked={Board.selected}
              onChange={() => handleCheckboxChangeBo(Board.id)}
              svg={<img src={Board.svg} alt={Board.title} />}
              titalText={Board.title}
              peraText={Board.peraText}
              label={Board.label}
              borderLeft="ml-4"
              lineClamp="line-clamp-1"
              checkboxContainer="checkboxContainer2"
              isActive={selectedBoard === Board.id}
            />
          ))}
        </div>
        <div className={mainStyle.rightBox}>
          {renderRightBoxContent()}
        </div>
      </div>

      <div className="flex justify-between mt-6 xl:hidden">
        <Buttons path="" text="Previous" buttonStyle="cusbuttons" onClick={handlePrevStep} alt="Previous" />
        <Buttons path="" text="Next" buttonStyle="cus-blue-buttons" onClick={handleNextStep} alt="Next" />
      </div>
    </>
  )
}

export default Boards