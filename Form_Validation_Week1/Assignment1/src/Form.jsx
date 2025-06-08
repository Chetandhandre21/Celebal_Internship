
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const countries = {
  India: ['Mumbai', 'Delhi', 'Pune'],
  USA: ['New York', 'Los Angeles', 'Chicago'],
  UK: ['London', 'Manchester', 'Liverpool'],
};

function Form() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '', lastName: '', username: '', email: '', password: '',
    phoneCode: '', phoneNumber: '', country: '', city: '', pan: '', aadhar: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.firstName) errs.firstName = 'First name is required';
    if (!form.lastName) errs.lastName = 'Last name is required';
    if (!form.username) errs.username = 'Username is required';
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email is required';
    if (!form.password) errs.password = 'Password is required';
    if (!form.phoneCode || !form.phoneNumber) errs.phone = 'Phone number with country code is required';
    if (!form.country) errs.country = 'Country is required';
    if (!form.city) errs.city = 'City is required';
    if (!form.pan || form.pan.length !== 10) errs.pan = 'Valid PAN (10 characters) is required';
    if (!form.aadhar || form.aadhar.length !== 12) errs.aadhar = 'Valid Aadhar (12 digits) is required';
    return errs;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      navigate('/success', { state: form });
    } else {
      setErrors(errs);
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <input name="username" value={form.username} onChange={handleChange} placeholder="Username" />
        {errors.username && <p className="error">{errors.username}</p>}

        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        {errors.email && <p className="error">{errors.email}</p>}

        <div className="password-wrapper">
          <input type={showPassword ? 'text' : 'password'} name="password" value={form.password} onChange={handleChange} placeholder="Password" />
          <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {errors.password && <p className="error">{errors.password}</p>}

        <div className="phone-group">
          <input name="phoneCode" value={form.phoneCode} onChange={handleChange} placeholder="Country Code" />
          <input name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
        </div>
        {errors.phone && <p className="error">{errors.phone}</p>}

        <select name="country" value={form.country} onChange={handleChange}>
          <option value="">Select Country</option>
          {Object.keys(countries).map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        {errors.country && <p className="error">{errors.country}</p>}

        <select name="city" value={form.city} onChange={handleChange} disabled={!form.country}>
          <option value="">Select City</option>
          {form.country && countries[form.country].map(city => <option key={city} value={city}>{city}</option>)}
        </select>
        {errors.city && <p className="error">{errors.city}</p>}

        <input name="pan" value={form.pan} onChange={handleChange} placeholder="PAN Number" />
        {errors.pan && <p className="error">{errors.pan}</p>}

        <input name="aadhar" value={form.aadhar} onChange={handleChange} placeholder="Aadhar Number" />
        {errors.aadhar && <p className="error">{errors.aadhar}</p>}

        <button type="submit" disabled={Object.keys(validate()).length !== 0}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
