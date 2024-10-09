import React, { useState } from 'react';
import { addNumbers, checkNumbers } from '../services/api';

const NumberManagement: React.FC = () => {
  const [numbers, setNumbers] = useState('');
  const [result, setResult] = useState('');

  const handleAddNumbers = async () => {
    try {
      const formattedNumbers = numbers.split('\n').map(number => ({
        telephone_number: number.trim(),
        has_whatsapp: true // You might want to add a way to set this dynamically
      }));

      const response = await addNumbers(formattedNumbers);
      setResult(JSON.stringify(response));
    } catch (error) {
      setResult('Error adding numbers');
    }
  };
  
  const handleCheckNumbers = async () => {
    try {
      const response = await checkNumbers(numbers.split('\n'));
      setResult(JSON.stringify(response));
    } catch (error) {
      setResult('Error checking numbers');
    }
  };

  return (
    <div>
      <textarea
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
        placeholder="Enter phone numbers, one per line"
      />
      <button onClick={handleAddNumbers}>Add Numbers</button>
      <button onClick={handleCheckNumbers}>Check Numbers</button>
      <pre>{result}</pre>
    </div>
  );
};

export default NumberManagement;
