import ForwardCounter from '../components/CustomHookExample/ForwardCounter';
import BackwardCounter from '../components/CustomHookExample/BackwardCounter';
import NewForwardCounter from '../components/CustomHookExample/NewForwardCounter';
import NewBackwardCounter from '../components/CustomHookExample/NewBackwardCounter';

const CustomHooks = () => {

  return (
    <>
      <h1>Custom hooks</h1>
      <h2>Example without custom hooks</h2>
      <h3>Increase</h3>
      <ForwardCounter />
      <h3>Decrease</h3>
      <BackwardCounter />
      <h2>Example with using custom hook</h2>
      <h3>Increase</h3>
      <NewForwardCounter />
      <h3>Decrease</h3>
      <NewBackwardCounter />
    </>
  )
}

export default CustomHooks;