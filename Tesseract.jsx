import React, { useRef } from 'react';

const ImageProcessingComponent = () => {
  const fileInputRef = useRef(null);
  const imgRef = useRef(null);

  const handleFileSelect = async () => {
    const file = fileInputRef.current.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const imgElement = imgRef.current;
        imgElement.src = e.target.result;

        // Convertir l'image en niveaux de gris avec OpenCV.js
        const src = cv.imread(imgElement);
        const gray = new cv.Mat();
        cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
        cv.imshow(imgElement, gray);

        // Extraire le texte avec Tesseract.js
        const { data: { text } } = await Tesseract.recognize(
          gray.data.buffer,
          { lang: 'eng' }
        );

        // Afficher le texte extrait
        console.log('Texte extrait :', text);

        // Libérer la mémoire
        src.delete();
        gray.delete();
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" ref={fileInputRef} accept="image/*" onChange={handleFileSelect} />
      <img ref={imgRef} style={{ maxWidth: '100%' }} alt="Processed" />
    </div>
  );
};

export default ImageProcessingComponent;
