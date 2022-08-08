import { Route, Routes, Navigate } from 'react-router-dom';

import classes from './App.module.css'
import UserModule from './components/UI/UserModule';
import FetchApi from './components/UI/FetchApi';
import Layout from './layout/Layout';
import MainNavigation from './layout/MainNavigation';
import Footer from './layout/Footer';

function App() {
  return (
    <div className={classes.main}>
      <MainNavigation />
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate replace to='/mainpage' />} />
          <Route path='mainpage' element={<UserModule />} />
          <Route path='fetchapi' element={<FetchApi />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
