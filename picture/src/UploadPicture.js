import React, { useState } from "react";

const UploadPicture = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Upload a Picture</h2>
      
      {/* File Input */}
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileChange} 
        style={{ marginBottom: "20px" }} 
      />
      
      {/* Display Image */}
      {selectedImage && (
        <div>
          <h3>Preview:</h3>
          <img 
            src={selectedImage} 
            alt="Uploaded Preview" 
            style={{ width: "300px", borderRadius: "10px" }} 
          />
        </div>
      )}
    </div>
  );
};

export default UploadPicture;
