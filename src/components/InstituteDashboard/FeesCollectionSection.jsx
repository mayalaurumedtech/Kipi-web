import React from 'react';
import { IconsUrls } from '../../utils/constant/Icons';

const FeesCollectionSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
            <div className="border border-territoryGreyOutline rounded-2xl p-4">
                <div className="flex gap-4">
                    <img src={IconsUrls.Dollar} alt="Dollar Icon" className="h-16" />
                    <div>
                        <h3 className="heading2">₹45,500</h3>
                        <p className="paragraph font-normal">Today’s Fess Collection</p>
                    </div>
                </div>
                <hr className="border-territoryGreyOutline my-4" />
                <div className="flex justify-between">
                    <p className="paragraph font-normal">No. of Students: <span className="font-medium">15</span></p>
                </div>
            </div>

            {/* Total Students Section */}
            <div className="border border-territoryGreyOutline rounded-2xl p-4">
                <div className="flex gap-4">
                    <img src={IconsUrls.CollageStudent} alt="Student Icon" className="h-16" />
                    <div>
                        <h3 className="heading2">352</h3>
                        <p className="paragraph font-normal">Total Students</p>
                    </div>
                </div>
                <hr className="border-territoryGreyOutline my-4" />
                <div className="flex justify-between">
                    <p className="paragraph font-normal">Present: <span className="font-medium">156</span></p>
                    <p className="paragraph font-normal">Absent: <span className="font-medium">7</span></p>
                </div>
            </div>

            {/* Total Teachers Section */}
            <div className="border border-territoryGreyOutline rounded-2xl p-4">
                <div className="flex gap-4">
                    <img src={IconsUrls.TeacherSvg} alt="Teacher Icon" className="h-16" />
                    <div>
                        <h3 className="heading2">12</h3>
                        <p className="paragraph font-normal">Total Teachers</p>
                    </div>
                </div>
                <hr className="border-territoryGreyOutline my-4" />
                <div className="flex justify-between">
                    <p className="paragraph font-normal">Present: <span className="font-medium">6</span></p>
                    <p className="paragraph font-normal">Absent: <span className="font-medium">1</span></p>
                </div>
            </div>
        </div>
    )
}

export default FeesCollectionSection