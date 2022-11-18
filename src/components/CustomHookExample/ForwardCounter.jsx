import { useState, useEffect } from 'react';

// Component which counts forward
const ForwardCounter = () => {
  const [counter, setCounter] = useState(0);

  // Have useEffect() here so we can't just create simple function outside for this logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h3>{counter}</h3>;
};

export default ForwardCounter;