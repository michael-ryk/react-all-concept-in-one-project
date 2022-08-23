import { useState } from 'react';

import classes from './AccordionItem.module.css';
const AccordionItem = ({question, answer}) => {

  const [ answerShown, setAnswerShown] = useState(false);

  const toggleAnswer = () => {
    setAnswerShown(prev => !prev);
  }

  return (
    <article className={classes.acccontainer}>
      <header className={classes.accheader}>
        <h4>{question}</h4>
        <button className={classes.btn} onClick={toggleAnswer}>{answerShown ? 'Collapse' : 'Expand'}</button>
      </header>
      {answerShown && <p>{answer}</p>}
    </article>
  )
}

export default AccordionItem;