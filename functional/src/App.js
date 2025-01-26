import React, { useState } from 'react';

function InfoButton() {
  const [info, setInfo] = useState("");

  const handleClick = () => {
    setInfo("You clicked the button! Here's some information.");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button 
        onClick={handleClick} 
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Click Me
      </button>
      {info && (
        <p style={{ marginTop: "20px", fontSize: "18px", color: "#333" }}>
          {info}
        </p>
      )}
    </div>
  );
}

export default InfoButton;

