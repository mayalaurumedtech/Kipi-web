  import React, { useState } from 'react';
  import PropTypes from 'prop-types';
  import styled from './styles/Accordion.module.css'; 
  import { Svg } from '../../utils/constant/Svg';

  const Accordion = ({ sections }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <div className={styled.accordion}>
        {sections.map((section, index) => (
          <div key={index} className={styled.accordionSection}>
            <div
              className={styled.accordionHeader}
              onClick={() => handleToggle(index)}
            >
              <h3>{section.title}</h3>
              <span>{activeIndex === index ? Svg.ArrowUp : Svg.ArrowDown}</span>
            </div>
            {activeIndex === index && (
              <div className={styled.accordionContent}>
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  Accordion.propTypes = {
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.node.isRequired,
      })
    ).isRequired,
  };

  export default Accordion;
