import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import style from './Header.module.css';
import Icons from './Icons/Icons';

function Header() {

  let nav = [
    { item: 'Каталог', adress: 'catalog' },
    { item: 'О нас', adress: '' },
    { item: 'Контакты', adress: 'contacts' }
  ];

  let navElements = nav.map(n => <Navigation key={n.adress} item={n.item} adress={n.adress} />);

  return (
    <header className={style.header}>
      <div className={style.header_conteiner}>
        <div className={style.header_logo}>
          <Logo />
        </div>
        <nav className={style.nav}>
          {navElements}
          <Icons />
        </nav>
      </div>
    </header>
  );
}

export default Header;