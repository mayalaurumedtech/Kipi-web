import React from 'react';
import InputCheckbox from '../custom/InputCheckbox'; 
import NoDataFound from '../custom/NoDataFound';
import { ImageUrls } from '../../utils/constant/Images';

const boardList = [
    {
      board: 'gsebBoards',
      img: ImageUrls.gsebBorad,
      title: 'G.S.E.B',
      peraText: 'Gujarat Secondary and Higher Secondary Education Board',
      organizationId: 1
    },
    {
      board: 'cbseBoards',
      img: ImageUrls.cbseBoard,
      title: 'C.B.S.E',
      peraText: 'Central Board of Secondary Education',
      organizationId: 2
  
    },
    {
      board: 'icseBoards',
      img: ImageUrls.icseBoard,
      title: 'ICSE/ISC',
      peraText: 'Indian Certificate of Secondary Education/Indian School Certificate',
      organizationId: 3
    }
  ];
  

const School = ({organizationId} ) => {
    return (
        <div className="pt-6 pl-6">
            <h2 className="title">Select Board</h2>
            <p className="paragraph2">Select your school’s board.</p>
        
            <div className="pt-6 flex flex-col gap-8">
                {boardList.length>0? boardList.filter(x=>x.organizationId==organizationId).map((board, index) => (
                    <InputCheckbox
                        key={index}
                        // checked={selectedOptions[board.board]}
                        // onChange={() => handleCheckboxChange(board.board)}
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
