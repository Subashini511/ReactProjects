import React, { useState } from "react";

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];

const StatesDropdown = () => {
  const [selectedState, setSelectedState] = useState("");

  const handleChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Select a State</h2>
      <select 
        value={selectedState} 
        onChange={handleChange} 
        style={{ padding: "10px", fontSize: "16px" }}
      >
        <option value="" disabled>Select a state</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      
      {selectedState && (
        <div style={{ marginTop: "20px" }}>
          <h3>You selected: {selectedState}</h3>
        </div>
      )}
    </div>
  );
};

export default StatesDropdown;
