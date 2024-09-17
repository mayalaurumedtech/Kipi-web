import React, { useState } from 'react';
import axios from 'axios';
import InputField from '../custom/InputField'; // Import your custom input field
import Buttons from '../custom/Buttons'; // Import your custom button component
import ImageUpload from '../custom/ImageUpload';
import SwitchToggleButton from '../custom/SwitchToggleButton'; // Import your switch toggle button
import { ImageUrls } from '../../utils/constant/Images';
import { IconsUrls } from '../../utils/constant/Icons';
import styles from './style/Information.module.css';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Information = ({ handleStep }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    aboutInstitute: '',
    addressLine1: '',
    addressLine2: '',
    pincode: '',
    city: '',
    state: '',
    country: 'India', // Default to India
    workingDays: daysOfWeek.reduce((acc, day) => {
      acc[`${day.toLowerCase()}TimeFrom`] = '';
      acc[`${day.toLowerCase()}TimeTo`] = '';
      acc[`${day.toLowerCase()}Active`] = false;
      return acc;
    }, {}),
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggleChange = (day) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      workingDays: {
        ...prevFormData.workingDays,
        [`${day.toLowerCase()}Active`]: !prevFormData.workingDays[`${day.toLowerCase()}Active`],
      },
    }));
  };

  const handlePincodeChange = async (e) => {
    const pincode = e.target.value;
    setFormData({ ...formData, pincode });

    if (pincode.length === 6) {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
        const data = response.data[0];

        if (data.Status === 'Success') {
          const postOfficeData = data.PostOffice[0];
          setFormData((prevFormData) => ({
            ...prevFormData,
            addressLine2: postOfficeData.Name,
            city: postOfficeData.District,
            state: postOfficeData.State,
            country: postOfficeData.Country || 'India',
          }));
          setErrors({});
        } else {
          setErrors({ pincode: 'Invalid Pincode' });
        }
      } catch (error) {
        setErrors({ pincode: 'Error fetching pincode data' });
      }
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {}; // Add your form validation logic
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted successfully');
      handleNextStep();
    }
  };

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h2 className="text-xl font-semibold mb-4">Institute Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">Institute Information</h2>
            <p className="text-gray-600">Join us and unlock a world of possibilities!</p>
          </div>
          <div className="justify-end hidden xl:flex">
            <Buttons path="" text="Next" buttonStyle="cus-blue-buttons" onClick={()=>handleStep(1)} alt="Next" />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <ImageUpload ImgStyle="w-full" PlaceholderImage={ImageUrls.BannerPlaceholder} />
          <ImageUpload ImgStyle="w-full" PlaceholderImage={ImageUrls.LogoPlaceholder} />
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <InputField
              label="Institute Name*"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <InputField
              label="Email*"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <InputField
              label="Mobile*"
              name="number"
              type="number"
              value={formData.number}
              onChange={handleChange}
              error={errors.number}
            />
          </div>
          <InputField
            name="aboutInstitute"
            value={formData.aboutInstitute}
            onChange={handleChange}
            placeholder="About Institute"
            error={errors.aboutInstitute}
            inputStyles="h-24"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <InputField
              label="Address line 1*"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              error={errors.addressLine1}
              icon={IconsUrls.Location}
            />
            <InputField
              label="Address line 2*"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              error={errors.addressLine2}
              icon={IconsUrls.Location}
            />
            <div>
              <InputField
                label="Pincode*"
                name="pincode"
                type="number"
                value={formData.pincode}
                onChange={handlePincodeChange}
                error={errors.pincode}
                icon={IconsUrls.Pincode}
              />
              {loading && <p>Loading location details...</p>}
            </div>
          
            <InputField
              label="City*"
              name="city"
              value={formData.city}
              onChange={handleChange}
              error={errors.city}
              icon={IconsUrls.City}
            />
            <InputField
              label="State*"
              name="state"
              value={formData.state}
              onChange={handleChange}
              error={errors.state}
              icon={IconsUrls.State}
            />
            <InputField
              label="Country*"
              name="country"
              value={formData.country}
              onChange={handleChange}
              error={errors.country}
              icon={IconsUrls.CountryGlobal}
            />
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <h3 className="text-lg font-semibold mb-4">Working Days <span className="font-normal">(Optional)</span></h3>
        <div className="flex flex-col gap-4">
          {daysOfWeek.map((day, index) => (
            <div key={index} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 items-center ${styles.workingDays}`}>
              <div>
                <h4 className='text-base font-medium'>{day}</h4>
              </div>
              <div>
                <SwitchToggleButton
                  isActive={formData.workingDays[`${day.toLowerCase()}Active`]}
                  onChange={() => handleToggleChange(day)}
                  id={`${day.toLowerCase()}Toggle`}
                />
              </div>

              <div>
                <InputField
                  label="Time from*"
                  type="time"
                  inputStyles="lg:w-40 w-full"
                  name={`${day.toLowerCase()}TimeFrom`}
                  onChange={handleChange}
                  error={errors[`${day.toLowerCase()}TimeFrom`]}
                  icon={IconsUrls.TimeFrom}
                  disabled={!formData.workingDays[`${day.toLowerCase()}Active`]} // Disable if not active
                />
              </div>
              <div>
                <InputField
                  label="Time To*"
                  type="time"
                  inputStyles="lg:w-40 w-full"
                  name={`${day.toLowerCase()}TimeTo`}
                  onChange={handleChange}
                  error={errors[`${day.toLowerCase()}TimeTo`]}
                  icon={IconsUrls.TimeTo}
                  disabled={!formData.workingDays[`${day.toLowerCase()}Active`]} // Disable if not active
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6 xl:hidden">
          <Buttons path="" text="Next" buttonStyle="cus-blue-buttons" onClick={()=>handleStep(1)} alt="Next" />
        </div>
      </form>
    </div>
  );
};

export default Information;
