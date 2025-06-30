import React, { useState } from 'react';

function Form2() {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Textarea value:', message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form 2: Textarea</h2>
      <textarea
        placeholder="Type your message..."
        value={message}
        onChange={handleChange}
      /><br /><br />
      <button type="submit">Submit Textarea</button>
    </form>
  );
}

export default Form2;
