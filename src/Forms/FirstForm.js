
import React, { useState } from 'react';

function Form1() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form 1 Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form 1: Enter your Details:</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} /><br /><br />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br /><br />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br /><br />
      <button type="submit">Submit Form </button>
    </form>
  );
}

export default Form1;
