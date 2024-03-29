import AccordionItem from './AccordionItem';
import classes from './AccordionMain.module.css';

import accordionData from './AccordionData';

const AccordionMain = () => {

  return (
    <main className={classes.accflex}>
      <div className={classes.acccontainer} >

        <h3>Questions and Answers</h3>
        
        <section className={classes.info}>
          {accordionData.map( item => {
            return (
              <AccordionItem key={item.id} {...item}/>
            )
          })}
        </section>

      </div>
    </main>
  )
}

export default AccordionMain;