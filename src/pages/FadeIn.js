import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

function FadeIn () {

  const [elements, setElements] = useState([]);
  const [constantList, setConstantList] = useState([1,2,3,4,5,6,7,8,9,10]);

  const handleClick = () => {
    const id = Math.round(Math.random() * 10000);

    setElements([...elements, {
      id,
      name: 'item ' + id
      }
    ]);
  }

  return (
    <StyleBlock>
      <h1>Fade In examples</h1>
      <h2>Fade in for each new added element</h2>
      <button onClick={handleClick}>Add Element</button>
      <ul>
        {elements.map(item => (
          <li key={item.id} className='fade-in'>
            <span>Id: {item.id}</span>
            <span> Name: {item.name}</span>
          </li>
        ))}
      </ul>
      <h2>Render list of items with fade in</h2>
      <ul>
        {constantList.map(item => {
            return (
              <div key={item} className='box fade-in'>
                <span>Id: {item}</span>
              </div>
            )
          })}
      </ul>
    </StyleBlock>
  );
}

const StyleBlock = styled.div`
  .fade-in {
    animation: fadeInAnimation 2s ease;
  }

  .box {
    border: solid 1px;
    width: 50px;
  }

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export default FadeIn;