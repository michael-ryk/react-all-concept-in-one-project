import { Route, Routes, Navigate } from 'react-router-dom';

// Import Components
import classes from './App.module.css'
import UserModule from './components/UI/UserModule';
import Layout from './layout/Layout';
import MainNavigation from './layout/MainNavigation';
import Footer from './layout/Footer';

// Import Pages
import HomePage from './pages/HomePage';
import FetchMovies from './pages/FetchMovies';
import Accordion from './pages/Accordion';

function App() {
  return (
    <div className={classes.main}>
      <MainNavigation />
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate replace to='/homepage' />} />
          <Route path='homepage' element={<HomePage />} />
          <Route path='usermodule' element={<UserModule />} />
          <Route path='fetch-movies' element={<FetchMovies />} />
          <Route path='accordion' element={<Accordion />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
