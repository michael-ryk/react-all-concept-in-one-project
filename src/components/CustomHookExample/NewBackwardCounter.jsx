import useCounter from './use-counter-hook';

const NewBackwardCounter = () => {
  const counter = useCounter('-');
  return <h3>{counter}</h3>;
};

export default NewBackwardCounter;
