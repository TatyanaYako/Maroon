import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import IconsSocial from '../IconsSocial/IconsSocial';
import style from './Footer.module.css';


function Footer() {

  let nav = [
    { item: 'Каталог', adress: 'catalog' },
    { item: 'О нас', adress: 'about' },
    { item: 'Магазины', adress: 'shops' },
    { item: 'Контакты', adress: 'contacts' }
  ];

  let navElements = nav.map(n => <Navigation key={n.adress} item={n.item} adress={n.adress} />);

  return (
    <footer className={style.footer_wripper}>
      <div className={style.footer_content}>
        <div className={style.footer_logo}>
          <Logo />
        </div>
        {navElements}
        <IconsSocial />
      </div>
      <div className={style.footer_copyright}>
        <p>Maroon 2020 Все права защищены</p>
        <p>Политика конфиденциальности</p>
      </div>
    </footer>
  );
}

export default Footer;