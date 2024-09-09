import React, { useState } from 'react';
import styled from './style/WorkingDay.module.css'; // Import custom CSS for switch toggle styles
import SwitchToggleButton from '../custom/SwitchToggleButton';
import InputDropdown from '../custom/InputDropdown';
import InputField from '../custom/InputField';

// options = [
//     { value: 'Mon', label: 'Monday' },
//     { value: 'Tue', label: 'Tuesday' },
//     { value: 'Wed', label: 'Wednesday' },
//     { value: 'Thu', label: 'Thursday' },
//     { value: 'Fri', label: 'Friday' },
//     { value: 'Sat', label: 'Saturday' },
//     { value: 'Sun', label: 'Sunday' },
// ]

const WorkingDay = () => {

    return (
        <div>
            <h3>Working Days (Optional)</h3>
            <div>
                <div>
                    <h4>Monday</h4>
                    <div>
                        <SwitchToggleButton />
                    </div>
                    <div>
                        <InputField
                            label="Time from*"
                            type='time'
                            name="timeFrom"
                            value={formData.timeFrom}
                            onChange={handleChange}
                            error={errors.timeFrom}
                            icon={IconsUrls.timeFrom}
                        />

                        <input type="time" name="" id="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkingDay;
