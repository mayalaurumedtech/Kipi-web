import React, { useState, useEffect } from 'react';
import Buttons from '../custom/Buttons';
import ImageUpload from '../custom/ImageUpload';
import styles from './style/Information.module.css';
import { ImageUrls } from '../../utils/constant/Images';
import InputField from '../custom/InputField';
import { IconsUrls } from '../../utils/constant/Icons';
import InputDropdown from '../custom/InputDropdown';
import States from '../../utils/constant/States';
import Countries from '../../utils/constant/Countries';
import Cities from '../../utils/constant/Cities';

const Information = ({ handleNextStep }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    number: '',
    addressLine1: '',
    addressLine2: '',
    pincode: '',
  });
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    // Reset state and city when country changes
    setSelectedState('');
    setSelectedCity('');
  }, [selectedCountry]);

  useEffect(() => {
    // Reset city when state changes
    setSelectedCity('');
  }, [selectedState]);

  const handleStateSelect = (option) => {
    setSelectedState(option.value);
    // Optionally, you can also update the cities based on the selected state
  };

  const handleCountrySelect = (option) => {
    setSelectedCountry(option.value);
  };

  const handleCitySelect = (option) => {
    setSelectedCity(option.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let validationErrors = {};

    // Name Validation
    if (!formData.firstName) {
      validationErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName) {
      validationErrors.lastName = 'Last Name is required';
    }

    // Email Validation
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      validationErrors.email = 'Email address is invalid';
    }

    // Number Validation
    if (!formData.number) {
      validationErrors.number = 'Number is required';
    }

    // Password Validation
    if (!formData.password) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      validationErrors.password = 'Password must be at least 8 characters long';
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission 
      console.log("Form submitted successfully");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div className="flex justify-between items-center sm:pt-8 pt-4">
        <div>
          <h2 className="heading">Institute Information</h2>
          <p className="paragraph">Join us and unlock a world of possibilities!</p>
        </div>
        {/* Button to go to the next step */}
        <div className="flex justify-end">
          <Buttons path="" text="Next" buttonStyle="cus-blue-buttons" onClick={handleNextStep} alt="Next" />
        </div>
      </div>

      <div className="flex gap-3 sm:gap-7 justify-around pt-3 sm:pt-6 pb-3 sm:pb-7">
        <ImageUpload ImgStyle={styles.bannerImg} PlaceholderImage={ImageUrls.BannerPlaceholder} />
        <ImageUpload ImgStyle={styles.logoImg} PlaceholderImage={ImageUrls.LogoPlaceholder} />
      </div>

      <div className="flex flex-col gap-3 sm:gap-6">
        <div className="grid grid-flow-col gap-3 sm:gap-6">
          <InputField
            label="Institute Name*"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            icon={IconsUrls.InstituteSvg}
          />
          <InputField
            label="Email*"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            icon={IconsUrls.Email}
          />
          <InputField
            label="Mobile*"
            name="number"
            type="number"
            value={formData.number}
            onChange={handleChange}
            error={errors.number}
            icon={IconsUrls.Phone}
          />
        </div>
        <div>
          <InputField
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            placeholder="About Institute"
            error={errors.addressLine1}
          />
        </div>
        <div className="grid grid-flow-col gap-3 sm:gap-6">
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
          <InputField
            label="Pincode*"
            name="pincode"
            type="number"
            value={formData.pincode}
            onChange={handleChange}
            error={errors.pincode}
            icon={IconsUrls.Pincode}
          />
        </div>
        <div className="grid grid-flow-col gap-3 sm:gap-6">
          {/* <InputDropdown
            label="Country*"
            name="country"
            value={Countries.find(country => country.value === selectedCountry)} // Pre-selected value
            options={Object.entries(Countries).map(([key, label]) => ({ value: key, label }))}
            onSelectOption={handleCountrySelect}
            icon={IconsUrls.CountryGlobal}
          /> */}
          <InputDropdown
            label="State*"
            name="state"
            value={States[selectedCountry]?.find(state => state.value === selectedState)} // Pre-selected value
            options={States[selectedCountry] || []}
            onSelectOption={handleStateSelect}
            icon={IconsUrls.States}
          />
          <InputDropdown
            label="City*"
            name="city"
            value={Cities[selectedState]?.find(city => city.value === selectedCity)} // Pre-selected value
            options={Cities[selectedState] || []}
            onSelectOption={handleCitySelect}
            icon={IconsUrls.City}
          />
        </div>
      </div>
    </div>
  );
};

export default Information;
