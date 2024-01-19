import React, { useRef } from 'react';
import cv from 'opencv.js';

const ImageProcessingComponent = () => {
  const imageRef = useRef(null);

  const processImage = () => {
    // Charger l'image
    const image = cv.imread(imageRef.current);

    // Convertir l'image en niveaux de gris
    const gray = new cv.Mat();
    cv.cvtColor(image, gray, cv.COLOR_RGBA2GRAY);

    // Appliquer un seuillage pour détecter le texte
    const threshold = new cv.Mat();
    cv.threshold(gray, threshold, 150, 255, cv.THRESH_BINARY);

    // Appliquer le masque sur l'image d'origine
    const result = new cv.Mat();
    cv.bitwise_and(image, image, result, threshold);

    // Afficher l'image résultante dans un élément image
    cv.imshow(imageRef.current, result);

    // Libérer la mémoire
    gray.delete();
    threshold.delete();
    result.delete();
  };

  return (
    <div>
      {/* Afficher l'image d'origine */}
      <img ref={imageRef} src="votre_image.jpg" alt="Original" />

      {/* Bouton pour déclencher le traitement d'image */}
      <button onClick={processImage}>Process Image</button>
    </div>
  );
};

export default ImageProcessingComponent;
