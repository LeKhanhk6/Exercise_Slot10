import { useState, useEffect, useCallback } from 'react';

export default function ValidatedInput() {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validationFunction = useCallback((text) => {
    return text.trim().length >= 4;
  }, []);

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return (
    <div className="demo-box">
      
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} 
        className={isValid ? '' : 'error'} placeholder="Enter at least 4 characters"
      />

      {!isValid && <p className="error-message">Please enter at least 4 characters.</p>}
      
    </div>
  );
}