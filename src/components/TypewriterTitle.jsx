import React, { useState, useEffect } from 'react';

const WORDS = ["VENDE.", "ESCALA.", "CONVIERTE."];

export default function TypewriterTitle() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = WORDS[currentWordIndex];
    let delay = isDeleting ? 100 : 150;

    if (!isDeleting && currentText === fullWord) {
      delay = 1000;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === fullWord) {
          setIsDeleting(true);
        } else {
          setCurrentText(fullWord.substring(0, currentText.length + 1));
        }
      } else {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % WORDS.length);
        } else {
          setCurrentText(fullWord.substring(0, currentText.length - 1));
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <span className="block text-[#24b3a9] mb-2 min-h-[1em]" translate="no">
      <span>{currentText}</span>
      <span className="animate-pulse ml-1 inline-block w-2 bg-[#24b3a9]">|</span>
    </span>
  );
}