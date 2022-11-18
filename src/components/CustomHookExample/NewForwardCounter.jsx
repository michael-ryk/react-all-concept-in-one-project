import useCounter from './use-counter-hook';

const NewForwardCounter = () => {
  const counter = useCounter('+');
  return <h3>{counter}</h3>;
};

export default NewForwardCounter;