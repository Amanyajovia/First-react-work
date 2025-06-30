import React, { useState } from 'react';

function Form3() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Option:', selectedOption);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form 3: Select Dropdown</h2>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">What area of computer science do you know best? </option>
        <option value="web">Web development</option>
        <option value="python">Programming with python</option>
        <option value="data">Data science</option>
        <option value="design">Graphics Design</option>
      </select><br /><br />
      <button type="submit">Submit Dropdown</button>
    </form>
  );
}

export default Form3;
