import React, { useState, useEffect } from 'react';


const ToggleChar = ({ char, delay}) => {
    const [charActive, setCharActive] = useState(false);
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        let timeout;
        if(charActive)
        {
            timeout = setTimeout(() => {
                setCurrentText('');
                setCharActive(false);
              }, delay);
        }
        else
        {
            timeout = setTimeout(() => {
                setCurrentText(char);
                setCharActive(true);
              }, delay);

        }
    return () => clearTimeout(timeout);
  }, [char, charActive, delay]);

  return <span>{currentText}</span>;
};

export default ToggleChar;
