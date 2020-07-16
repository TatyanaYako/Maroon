import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Catalog from './components/Catalog/Catalog';
import Follow from './components/Follow/Follow';
import Presentation from './components/Presentation/Presentation';
import PageProduct from './components/PageProduct/PageProduct';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className='wripper'>
        <div className='header_conteiner'>
          <Header />
          <Route path='/main' render={() => <Presentation />} />
        </div>
        <Route path='/main' render={() => <MainPage />} />
        <Route path='/catalog' render={() => <Catalog />} />
        <Route path='/Rose' render={() => <PageProduct />} />
        <Route path='/profile' render={() => <Profile />} />
        <Follow />
        <Contacts />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
