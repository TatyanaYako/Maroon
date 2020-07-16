import React from 'react';
import CardProduct from '../CardProduct/CardProduct';
import style from './Catalog.module.css';
import Filter from './Filter/Filter';
import { Route, NavLink } from 'react-router-dom';

function Catalog(props) {
	return (
		<section className={style.catalog_wripper}>
			<div className={style.catalog_title}>
				<h3>Каталог</h3>
				<NavLink to='/catalog/filter'>Фильтр</NavLink>
			</div>
			<Route path='/catalog/filter' render={() => <Filter />} />
			<div className={style.catalog}>
				<CardProduct />
			</div>
		</section>
	);
}

export default Catalog;