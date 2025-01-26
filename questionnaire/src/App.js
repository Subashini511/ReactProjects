import React, { useState } from 'react';

const Questionnaire = () => {
  // Sample responses, you can collect these via form inputs or other methods
  const [responses, setResponses] = useState({
    name: '',
    age: '',
    email: '',
  });

  // Handler for saving responses as a JSON file
  const saveAsFile = () => {
    const fileData = JSON.stringify(responses, null, 2); // Converts the object to a formatted JSON string
    const blob = new Blob([fileData], { type: 'application/json' }); // Create a Blob from the string
    const link = document.createElement('a'); // Create an anchor element
    link.href = URL.createObjectURL(blob); // Create a URL for the Blob
    link.download = 'responses.json'; // Specify the default file name
    link.click(); // Simulate a click to start the download
  };

  // Handler for updating responses (you can replace this with actual form elements)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponses((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Questionnaire</h1>
      <form>
        <input
          type="text"
          name="name"
          value={responses.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <input
          type="number"
          name="age"
          value={responses.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />
        <input
          type="email"
          name="email"
          value={responses.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </form>
      <button onClick={saveAsFile}>Save Responses as File</button>
    </div>
  );
};

export default Questionnaire;
