import ProductItem from './ProductItem';

import classes from './ProductMenu.module.css';

const ProductMenu = ({items}) => {

  return <div className={classes['items-list']}>
    {items.map(item => {
      return <ProductItem key={item.id} {...item}/>
    })}
  </div>
}

export default ProductMenu;