import { useEffect, useState } from 'react';

import classes from './Products.module.css';
import dummyProducts from './dummyProducts';

import Categories from './Categories';
import ProductMenu from './ProductMenu';


const Products = () => {
  // Initial values
  const [ itemsList, setItemsList ] = useState(dummyProducts);
  const allCategories = ['כל הקטגוריות', ...new Set(dummyProducts.map(item => item.category))]

  // Filter Products
  const filterProducts = (filter) => {
    if (filter === 'כל הקטגוריות') {
      setItemsList(dummyProducts)
    } else {
      const filteredItems = dummyProducts.filter( item => item.category === filter );
      setItemsList(filteredItems)
    }
  }

  return <main>
    <section>
      <div className={classes.title}>
        <h1>List of Products</h1>
      </div>
      <Categories categories={allCategories} filterProducts={filterProducts}/>
      <ProductMenu items={itemsList}/>
    </section>
  </main>
}

export default Products;