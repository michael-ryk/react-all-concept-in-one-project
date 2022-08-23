import classes from './ProductItem.module.css';
const ProductItem = ({name, category, price, img, description}) => {

  return (
    <article className={classes['item-container']}>
      <img src={img} alt={name} />
      <div className={classes['item-info']}>
        <header>
          <h3>{name}</h3>
          <h4>&#8362;{price} :מחיר</h4>
        </header>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default ProductItem;