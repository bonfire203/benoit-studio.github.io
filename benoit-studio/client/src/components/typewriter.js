import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, delay, wordDelay}) => {
    const [currentText, setCurrentText] = useState('');
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [currentWordIndex, SetCurrentWordIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (currentLetterIndex < words[currentWordIndex].length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + words[currentWordIndex][currentLetterIndex]);
        setCurrentLetterIndex(prevIndex => prevIndex + 1);
      }, delay);
    }
    else
    {//assume end of word
        if(currentWordIndex < words.length-1)
        {
            timeout = setTimeout(() => {
                SetCurrentWordIndex(currentWordIndex + 1);
                setCurrentText('');
                setCurrentLetterIndex(0);
              }, wordDelay);
        }
    }
    return () => clearTimeout(timeout);
  }, [currentLetterIndex, currentWordIndex, delay, words, wordDelay]);

  return <span>{currentText}</span>;
};

export default Typewriter;
