import { Route, Routes, Navigate } from 'react-router-dom';

import UserModule from './components/UI/UserModule';
import FetchApi from './components/FetchApi/FetchApi';
import Layout from './layout/Layout';
import MainNavigation from './layout/MainNavigation';
import Footer from './layout/Footer';

import HomePage from './pages/HomePage';
import Accordion from './pages/Accordion';
import ProductsFilter from './pages/ProductsFilter';

import classes from './App.module.css'

function App() {
  return (
    <div className={classes.main}>
      <MainNavigation />
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate replace to='/homepage' />} />
          <Route path='homepage' element={<HomePage />} />
          <Route path='usermodule' element={<UserModule />} />
          <Route path='fetchapi' element={<FetchApi />} />
          <Route path='accordion' element={<Accordion />} />
          <Route path='products-filter' element={<ProductsFilter />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
