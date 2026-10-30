import React, { useState, useEffect } from 'react';

export default function TypewriterTitle() {
  const words = ["VENDE.", "ESCALA.", "CONVIERTE."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const fullWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Escribiendo la palabra
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        
        // Si termina de escribir la palabra, pausa antes de borrar
        if (currentText === fullWord) {
          setTimeout(() => setIsDeleting(true), 1000); // Tiempo que se queda estática
          setTypingSpeed(100);
        }
      } else {
        // Borrando la palabra
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        
        // Si termina de borrar, pasa a la siguiente palabra
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <span className="block text-[#24b3a9] mb-2 min-h-[1em]">
      {currentText}
      <span className="animate-pulse ml-1 inline-block w-2 bg-[#24b3a9]">|</span>
    </span>
  );
}