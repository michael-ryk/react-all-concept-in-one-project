import classes from './Categories.module.css';

const Categories = ({ categories }) => {
  const handleClick = (e) => {
    console.log(e.target.innerHTML)
  };

  return (
    <>
      {categories.map((item, index) => {
        return (
          <button
            type='button'
            className={classes['filter-btn']}
            key={index}
            onClick={handleClick}
          >
            {item}
          </button>
        );
      })}
    </>
  );
};

export default Categories;
