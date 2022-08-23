import classes from './AccordionItem.module.css';
const AccordionItem = ({question, answer}) => {


  return (
    <article className={classes.acccontainer}>
      <header className={classes.accheader}>
        <h4>{question}</h4>
        <button className={classes.btn}>Expand</button>
      </header>
      <p>{answer}</p>
    </article>
  )
}

export default AccordionItem;