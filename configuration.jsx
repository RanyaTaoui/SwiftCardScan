import React, { useRef, useState } from 'react';
import Tesseract from 'tesseract.js';

const Configuration = () => {
  const fileInputRef = useRef(null);
  const [extractedText, setExtractedText] = useState('');

  const handleFileSelect = async () => {
    const file = fileInputRef.current.files[0];

    if (file) {
      const { data: { text } } = await Tesseract.recognize(
        file,
        'eng', // Langue
        { logger: (info) => console.log(info) } // Options supplémentaires
      );

      setExtractedText(text);
    }
  };

  return (
    <div>
      <input type="file" ref={fileInputRef} accept="image/*" onChange={handleFileSelect} />
      <div>
        <strong>Texte extrait :</strong>
        <p>{extractedText}</p>
      </div>
    </div>
  );
};

export default Configuration;
