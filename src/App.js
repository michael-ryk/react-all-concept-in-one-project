import { Route, Routes, Navigate } from 'react-router-dom';

// Import Components
import Layout from './layout/Layout';
import MainNavigation from './layout/MainNavigation';
import Footer from './layout/Footer';

// Import Pages
import HomePage from './pages/HomePage';
import Users from './pages/Users';
import FetchMovies from './pages/FetchMovies';
import Accordion from './pages/Accordion';
import ProductsFilter from './pages/ProductsFilter';
import CustomHooks from './pages/CustomHook';

import classes from './App.module.css'

function App() {
  return (
    <div className={classes.main}>
      <MainNavigation />
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate replace to='/homepage' />} />
          <Route path='homepage' element={<HomePage />} />
          <Route path='add-user' element={<Users />} />
          <Route path='fetch-movies' element={<FetchMovies />} />
          <Route path='accordion' element={<Accordion />} />
          <Route path='products-filter' element={<ProductsFilter />} />
          <Route path='custom-hooks' element={<CustomHooks />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
