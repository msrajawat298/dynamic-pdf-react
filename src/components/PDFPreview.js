import React from 'react';
import { useLocation } from 'react-router-dom';

const PDFPreview = () => {
  const location = useLocation();
  const { formData } = location.state || {}; // Ensure formData is safely accessed

  if (!formData) {
    return <div>No form data found!</div>; // Handle case where formData is null or undefined
  }

  return (
    <div>
      <h1>PDF Preview</h1>
      {/* Display PDF preview using formData */}
    </div>
  );
};

export default PDFPreview;
