"use client"
import { useEffect, useState } from "react";

const Typewriter = () => {
  const words = [
    "H-1B?", "EB-2?", "EB-3?" , "F-1?", "L-1?"
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [j, setJ] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const word = words[currentWordIndex];
      const currentChar = word[j];

      if (isDeleting) {
        setCurrentWord(word.substring(0, j - 1));
        setJ(j - 1);
        if (j === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((index) => (index + 1) % words.length);
        }
      } else {
        setCurrentWord(word.substring(0, j + 1));
        setJ(j + 1);
        if (j === word.length) {
          setIsDeleting(true);
        }
      }
    };

    const interval = setTimeout(type, 220);
    return () => clearTimeout(interval);
  }, [j, isDeleting, currentWordIndex]);

  const cursorBlink = () => {
    return currentWordIndex < words.length ? "|" : ""; // Show cursor only while typing words
  };

  return (
    <span className="inline-block">
      <span className="text-[#96ce52]">{currentWord}</span>
      <span className="text-gray-950 animate-blinking">{cursorBlink()}</span>
    </span>
  );
};

export default Typewriter;
