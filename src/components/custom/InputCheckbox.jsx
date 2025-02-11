import React from 'react';

const InputCheckbox = ({ checked, onChange, label, svg, borderLeft, checkboxContainer, titalText, peraText, isActive, lineClamp }) => {


    return (
        <div className={`flex gap-2 items-center pb-1 ${checkboxContainer} ${(isActive ? "active" : "")} `} onClick={onChange}>

            <input
                type="checkbox"
                className={`roundedCheckbox ${borderLeft}`}
                checked={checked}
                readOnly
            />
            {svg && (
                <div className="svg">{svg}</div>
            )}
            {label && (
                <label htmlFor="rememberMe" className="text-sm font-light">
                    {label}
                </label>
            )}
            {titalText && (
                <div className="input-title-box">
                    <h3 className="title">
                        {titalText}
                    </h3>
                    <p className={`paragraph2 ${lineClamp}`}>{peraText}</p>
                </div>
            )}
        </div>
    );
};

export default InputCheckbox;
