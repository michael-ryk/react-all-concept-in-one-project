import { useState } from 'react';

import classes from './Products.module.css';
import dummyProducts from './dummyProducts';

import Categories from './Categories';
import ProductMenu from './ProductMenu';


const Products = () => {
  
  const [ itemsList, setItemsList ] = useState(dummyProducts);
  const [ categories, setCategories ] = useState([]);
  
  const allCategories = ['כל הקטגוריות', ...new Set(itemsList.map(item => item.category))]

  return <main>
    <section>
      <div className={classes.title}>
        <h1>List of Products</h1>
      </div>
      <Categories categories={allCategories}/>
      <ProductMenu items={itemsList}/>
    </section>
  </main>
}

export default Products;