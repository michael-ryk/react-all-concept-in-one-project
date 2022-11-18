import { useState, useEffect } from 'react';

// All logic now in custom hook which receive + or - based on component called it
// Name must start with "use"
const useCounter = (sign) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sign === '+') setCounter((prevCounter) => prevCounter + 1);
      if (sign === '-') setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // doesnt return jsx just counter value - it is custom hook, not component
  return counter;
};

export default useCounter;