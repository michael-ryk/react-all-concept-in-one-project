import { computeHeadingLevel } from '@testing-library/react';
import classes from './Categories.module.css';

const Categories = ({ categories, filterProducts }) => {

  return (
    <div className={classes['category-container']}>
      {categories.map((item, index) => {
        return (
          <button
            type='button'
            key={index}
            onClick={ () => {filterProducts(item)} }
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
