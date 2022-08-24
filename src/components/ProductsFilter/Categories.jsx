import classes from './Categories.module.css';

const Categories = ({ categories }) => {
  const handleClick = (e) => {
    console.log(e.target.innerHTML)
  };

  return (
    <div className={classes['category-container']}>
      {categories.map((item, index) => {
        return (
          <button
            type='button'
            key={index}
            onClick={handleClick}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
