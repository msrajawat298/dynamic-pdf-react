import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { useLocation } from 'react-router-dom';
import PDFDocument from './PDFDocument/PDFDocument';

const PDFPreview = () => {
  const location = useLocation();
  const { formData } = location.state || {}; // Ensure formData is safely accessed

  if (!formData) {
    return <div>No form data found!</div>; // Handle case where formData is null or undefined
  }

  return (
    <div>
      <h1>PDF Preview</h1>
      <PDFViewer width="100%" height="800">
        <PDFDocument data={formData} />
      </PDFViewer>
    </div>
  );
};

export default PDFPreview;
