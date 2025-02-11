import React from 'react';
import InputCheckbox from '../custom/InputCheckbox'; 
import NoDataFound from '../custom/NoDataFound';
import { ImageUrls } from '../../utils/constant/Images';

const School = ({ schoolBoardList, handleCheckboxChangeBoard }) => {
  return (
    <div className="pt-6 pl-6">
      <h2 className="title">Select Board</h2>
      <p className="paragraph2">Select your School's Board</p>
      <div className="pt-6 flex flex-col gap-8">
        {schoolBoardList.length > 0 ? schoolBoardList.map((board, index) => (
          <InputCheckbox
            key={index}
            checked={board.selected}
            onChange={() => handleCheckboxChangeBoard(board.id)}
            svg={<img src={board.img} alt={board.title} className="ml-4" />}
            titalText={board.title}
            peraText={board.peraText}
          />
        )) : <NoDataFound message="No Board Found!" />}
      </div>  
    </div>
  );
}

export default School;
