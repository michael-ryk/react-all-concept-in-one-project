import { Route, Routes, Navigate } from 'react-router-dom';

import classes from './App.module.css'
import UserModule from './components/UI/UserModule';
import FetchApi from './components/UI/FetchApi';
import Layout from './layout/Layout';
import MainNavigation from './layout/MainNavigation';

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
    </div>
  );
}

export default App;
